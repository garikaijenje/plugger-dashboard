<?php

namespace App\Jobs;

use App\Image;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

class OptimizeImage implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var Image $image
     * */
    private $image;

    private $type;

    /**
     * Create a new job instance.
     *
     * @param Image $image
     */
    public function __construct($image , $type)
    {
        $this->image = $image;
        $this->type = $type;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // Optimize Image

        $image = $this->image;
        $type = $this->type;

        $configs =  [
            [
                'name' => 'small',
                'quality' => 20 ,
                'dimensions' => [
                    'width' => 200,
                    'height' => 130,
                ]

            ],[
                'name' => 'medium',
                'quality' => 40 ,
                'dimensions' => [
                    'width' => 375,
                    'height' => 285,
                ]

            ],[
                'name' => 'large',
                'quality' => 95 ,
                'dimensions' => [
                    'width' => 750,
                    'height' => 1000,
                ]

            ],
        ];

        foreach ( $configs as $config )
        {
            // Get Full path of original Image

            $path = public_path($image->path);

            // Open Image
            /** @noinspection PhpUndefinedClassInspection */
            /** @var \Intervention\Image\Image $img */
            $img = \Image::make($path);
            $rand = Str::random(90).'.jpeg';
            $save = "/storage/{$type}/{$rand}";
            $location = public_path($save);
            $img->fit( $config['dimensions']['width'] , $config['dimensions']['height']);
            $img->save( $location, $config['quality'] );
            $image->update([
                $config['name'] => $save
            ]);
        }

        $image->update([
            'optimized' => true
        ]);

    }
}
