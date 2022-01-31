<?php

namespace App\Console\Commands;

use App\SystemVariables;
use Illuminate\Console\Command;

class SeedSystem extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'seed:system';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $values = [
            [
                'key' => 'SONG-PUBLISH-PRICE',
                'value' => '100',
                'description' => 'Song publish price',
                'parameters' => 'integer',
            ],
        ];


        foreach ($values as $value)
        {
            if (!SystemVariables::query()->where('key' , $value['key'])->exists())
            {
                SystemVariables::query()->updateOrCreate([
                    'key' => $value['key']
                ], [
                    'value' => $value['value'],
                    'description' => $value['description'],
                    'parameters' => $value['parameters'],
                ]);

                print_r($value);
            }
        }


        return Command::SUCCESS;
    }
}
