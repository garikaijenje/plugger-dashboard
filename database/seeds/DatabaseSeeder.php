<?php

use App\Album;
use App\Artist;
use App\Genre;
use App\Image;
use App\Language;
use App\Province;
use App\Song;
use App\State;
use App\User;
use Faker\Factory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
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

        Artisan::call("seed:system");

        // Users

        // Remove cache of permissions

        /** @var PermissionRegistrar $permissionRegistrar
         * @noinspection VirtualTypeCheckInspection
         */

        $permissionRegistrar = app()[PermissionRegistrar::class];
        $permissionRegistrar->forgetCachedPermissions();


        $faker = Faker\Factory::create();

        /** @var User $user */
        $user = User::query()->create([
            'name' => 'Root',
            'last_name' => 'System',
            'email' => 'root@system',
            'phone' => '263771222081',
            'type' => 'admin',
            'password' => Hash::make('password')
        ]);


        Image::query()->create([
            'image_id' => $user->id,
            'image_type' => User::class,
            'name' => $faker->name,
            'ext' => 'png',
            'size' => $faker->numberBetween(1000, 9999999),
            'path' => '/images/hiclipart.com.png',
            'user_id' => $user->id,
            'optimized' => false,
            'key' => 'user-cover'
        ]);


//        Artist::query()->create([
//            'user_id' => $user->id
//        ]);

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

        $states = [
            ['01' , 'Uploaded'],
            ['02' , 'Waiting Admin approval'],
            ['03' , 'Waiting ZIMURA approval'],
            ['04' , 'Published'],
        ];

        foreach ($states as $state)
        {
            State::query()->create([
                'code' => $state[0],
                'description' => $state[1]
            ]);
        }


        // Create albums with Songs

        for ($i = 1 ; $i <= 1 ; $i++)
        {

           echo  $i.PHP_EOL;

//           $user  = User::query()->create([
//                'name' => $faker->firstName,
//                'last_name' => $faker->lastName,
//                'phone' => $faker->phoneNumber,
//                'email' => $faker->email,
//                'status' => true,
//                'require_otp' => false,
//                'type' => 'artist',
//                'email_verified_at' => now(),
//                'ip' => $faker->ipv4,
//                'last_login' => now(),
//                'password' => Hash::make('password'),
//           ]);

           $artist  = Artist::query()->create([
                'user_id' =>  $user->id,
                'stage_name' =>  $faker->name,
                'nationality' =>  $faker->country,
                'national_id' =>  $faker->numberBetween(10000 , 99999),
                'start_year' =>  now()->format('Y-m-d'),
                'marital_status' =>  'single',
                'booking_number' =>  $faker->bankAccountNumber,
                'facebook' =>  $faker->url,
                'instagram' =>  $faker->url,
                'twitter' =>  $faker->url,
                'tiktok' =>  $faker->url,
                'n_name' =>  $faker->firstName,
                'n_last_name' =>  $faker->lastName,
                'n_phone' =>  $faker->phoneNumber,
                'n_email' =>  $faker->email,
                'status' =>  true,
                'completed_profile' => true
             ]);


            for ($a = 1 ; $a <= 2 ; $a++)
            {
                echo  $i.$a.PHP_EOL;

                $album = Album::query()->create([
                    'name' => implode(" ", $faker->words(2)),
                    'artist' => $artist->stage_name,
                    'artist_id' => $artist->id,
                    'user_id' => $user->id,
                    'province_id' => 1,
                    'description' => implode(" ", $faker->words(10)),
                ]);

                $album->genre()->sync(
                    [1,2]
                );

                $album->language()->sync(
                    [1]
                );

                Image::query()->create([
                    'image_id' => $album->id,
                    'image_type' => Album::class,
                    'name' => $faker->name,
                    'ext' => 'png',
                    'size' => $faker->numberBetween(1000, 9999999),
                    'path' => '/images/hiclipart.com.png',
                    'user_id' => $user->id,
                    'optimized' => false,
                    'key' => 'album-cover'
                ]);

                // Songs

                for ($b = 1 ; $b <= 3 ; $b++)
                {
                    echo $i . $a . $b . PHP_EOL;

                    $song = Song::query()->create([
                        'artist_id' => $artist->id,
                        'artist_name' =>$artist->stage_name,
                        'duration' => "05:01",
                        'ref' => 'PLG-' . now()->format('Y-m-d') . '-'  .  strtoupper(uniqid()),
                        'state_code' => '01',
                        'type' => '',
                        'album_title' => $album->name,
                        'writer' => $faker->firstName .' ' . $faker->lastName,
                        'copyrights' => $faker->firstName .' ' . $faker->lastName,
                        'arranger' => $faker->firstName .' ' . $faker->lastName,
                        'song_title' => implode(" ", $faker->words(3)),
                        'studio_name' => $faker->word,
                        'studio_producer' => $faker->firstName .' ' . $faker->lastName,
                        'instrumental_path' => '/song/Jay Sean ft Lil Wayne ~ Down Down.mp3',
                        'instrumental_name' => implode(" ", $faker->words(3)),
                        'description' => implode(" ", $faker->words(10)),
                        'song_path' => '/song/Jay Sean ft Lil Wayne ~ Down Down.mp3',
                        'song_name' => implode(" ", $faker->words(3)),
                        'track_number' => $b,
                        'album_id' => $album->id,
                        'user_id' => $user->id,
                        'province_id' => 1,
                        'release_date' => now(),
                    ]);

                    $song->genre()->sync(
                        [1,2]
                    );

                    $song->language()->sync(
                        [1]
                    );

                    Image::query()->create([
                        'image_id' => $song->id,
                        'image_type' => Song::class,
                        'name' => $faker->name,
                        'ext' => 'png',
                        'size' => $faker->numberBetween(1000, 9999999),
                        'path' => '/images/hiclipart.com.png',
                        'user_id' => $user->id,
                        'optimized' => false,
                        'key' => 'song-cover'
                    ]);

                }
            }
        }
    }
}
