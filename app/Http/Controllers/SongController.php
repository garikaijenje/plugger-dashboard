<?php

namespace App\Http\Controllers;

use App\Album;
use App\filters\AlbumFilter;
use App\filters\SongFilter;
use App\Image;
use App\Jobs\OptimizeImage;
use App\Song;
use Illuminate\Http\Request;

class SongController extends Controller
{

    public function index(SongFilter $filter)
    {
        return api()
            ->data('list', Song::filter($filter , [
                'user_id' => auth()->id()
            ])->with(['cover' , 'genre' , 'language' , 'province'])->paginate(\request('size') ?? 30))
            ->build();
    }

    public function create(Request $request)
    {
        $request->validate([
            'file' => ['required'],
            'song_title' => ['required'],
            'song_file' => ['required'],
            'artist' => ['required'],
            'genreIDs' => ['required'],
            'province' => ['required'],
            'album' => ['required'],
            'description' => ['required'],
            'languageIDs' => ['required'],
            'studio_name' => ['required'],
            'studio_producer' => ['required'],
            'track_number' => ['required' , 'integer'],
            'release_date' => ['required'],
        ]);

        $song_file = $request->file('song_file');
        $song_path = '/storage/' . $song_file->store('songs' , 'public');



        $instrumental_file = null;
        $instrumental_path = null;

        if ($request->get('instrumental_file'))
        {
            $instrumental_file = $request->file('instrumental_file');
            $instrumental_path = '/storage/' . $instrumental_file->store('instrumentals' , 'public');

        }

        /** @var Song $song */
        $song = Song::query()->create([

            'song_title' => $request->get('song_title'),
            'artist_name' => $request->get('artist'),
            'album_title' => $request->get('album'),
            'album_id' => $request->get('album_id'),
            'artist_id' => $request->get('artist_id'),
            'province_id' => $request->get('province'),
            'description' => $request->get('description'),
            'release_date' => carbon($request->get('release_date')),
            'track_number' => $request->get('track_number'),
            'studio_name' => $request->get('studio_name'),
            'studio_producer' => $request->get('studio_producer'),
            'state_code' => "01",

            'user_id' => auth()->id(),

            'instrumental_path' => $instrumental_path,
            'instrumental_name' => $instrumental_file ? $instrumental_file->getClientOriginalName() : null,

            'song_path' =>  $song_path,
            'song_name' => $song_file->getClientOriginalName(),

            'ref' => 'PLG-' . $request->get('release_date') . '-'  .  strtoupper(uniqid())
        ]);

        $song->genre()->sync(
            explode(',', $request->get('genreIDs'))
        );

        $song->language()->sync(
            explode(',', $request->get('languageIDs'))
        );


        $file = $request->file('file');
        $path = '/storage/' . $file->store('album' , 'public');

        /** @var Image $image */
        $image = Image::query()->create([
            'image_id' => $song->id,
            'image_type' => Song::class,
            'name' => $file->getClientOriginalName(),
            'ext' => $file->getClientOriginalExtension(),
            'size' => $file->getSize(),
            'path' => $path,
            'user_id' => auth()->id(),
            'optimized' => false,
            'key' => 'song-cover'
        ]);


        $this->dispatch(new OptimizeImage($image, 'album'));

        return api()->data('model', $song)->build('Song successfully created');




    }
}
