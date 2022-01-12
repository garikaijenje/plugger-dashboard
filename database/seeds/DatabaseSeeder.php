<?php

use App\Genre;
use App\Language;
use App\Province;
use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     * @throws Exception
     */
    public function run()
    {
        Model::unguard();

        // Users

        // Remove cache of permissions

        /** @var PermissionRegistrar $permissionRegistrar
         * @noinspection VirtualTypeCheckInspection
         */

        $permissionRegistrar = app()[PermissionRegistrar::class];
        $permissionRegistrar->forgetCachedPermissions();


        /** @var User $user */
        $user = User::query()->create([
            'name' => 'Root',
            'last_name' => 'System',
            'email' => 'root@system',
            'phone' => '263771222081',
            'type' => 'admin',
            'password' => Hash::make('password')
        ]);

        /** @var Role $admin */
        $admin = Role::query()->create([
            'name' => 'admin',
        ]);

        collect([
            'manage-users',
        ])->each(function ($permission) use ($admin){
            $admin->givePermissionTo(Permission::query()->create([
                'name' => $permission
            ]));
        });

        $user->assignRole($admin);


        $genres = [
            'Rock',
            'Hip pop',
            'Pop',
            'House'
        ];

        foreach ($genres as $genre)
        {
            echo 'Adding Genre : ' .  $genre . PHP_EOL;

            Genre::query()->create([
                'name' =>  $genre,
                'description' =>  $genre
            ]);
        }

        $list = [
            'Shona',
            'English',
        ];

        foreach ($list as $item)
        {
            echo 'Adding Language : ' .  $item . PHP_EOL;

            Language::query()->create([
                'name' =>  $item,
                'description' =>  $item
            ]);
        }

        $list = [
            'Mashonaland',
            'Manicaland',
        ];

        foreach ($list as $item)
        {
            echo 'Adding Province : ' .  $item . PHP_EOL;

            Province::query()->create([
                'name' =>  $item,
                'description' =>  $item
            ]);
        }

    }
}
