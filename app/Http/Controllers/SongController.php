<?php

namespace App\Http\Controllers;

use App\Album;
use App\Cart;
use App\CartItem;
use App\filters\AlbumFilter;
use App\filters\SongFilter;
use App\Image;
use App\Jobs\OptimizeImage;
use App\Service\System;
use App\Song;
use Exception;
use Illuminate\Http\JsonResponse;
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
            'writer' => ['required'],
            'copyrights' => ['required'],
            'arranger' => ['required'],
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
            'writer' => $request->get('writer'),
            'copyrights' => $request->get('copyrights'),
            'arranger' => $request->get('arranger'),
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
    public function edit(Request $request , Song $model)
    {
        $request->validate([
            'song_title' => ['required'],
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
            'writer' => ['required'],
            'copyrights' => ['required'],
            'arranger' => ['required'],
        ]);

        $song_file = $request->file('song_file');

        if ($song_file)
        {
            $song_path = '/storage/' . $song_file->store('songs' , 'public');
            $model->update([
                'song_path' =>  $song_path,
                'song_name' => $song_file->getClientOriginalName(),
            ]);
        }

        $instrumental_file = $request->file('instrumental_file');

        if ($instrumental_file)
        {
            $instrumental_path = '/storage/' . $instrumental_file->store('instrumentals' , 'public');
            $model->update([
                'instrumental_path' => $instrumental_path,
                'instrumental_name' => $instrumental_file ? $instrumental_file->getClientOriginalName() : null,
            ]);
        }

        /** @var Song $model */
        $model->update([

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
            'writer' => $request->get('writer'),
            'copyrights' => $request->get('copyrights'),
            'arranger' => $request->get('arranger'),
            'state_code' => "01",
        ]);

        $model->genre()->sync(
            explode(',', $request->get('genreIDs'))
        );

        $model->language()->sync(
            explode(',', $request->get('languageIDs'))
        );


        $file = $request->file('file');

        if ($file)
        {
            $path = '/storage/' . $file->store('album' , 'public');

            /** @var Image $image */
            $image = Image::query()->updateOrCreate([
                'image_id' => $model->id,
                'image_type' => Song::class,
            ],[
                'name' => $file->getClientOriginalName(),
                'ext' => $file->getClientOriginalExtension(),
                'size' => $file->getSize(),
                'path' => $path,
                'user_id' => auth()->id(),
                'optimized' => false,
                'key' => 'song-cover'
            ]);


            $this->dispatch(new OptimizeImage($image, 'album'));

        }

        return api()->data('model', $model)->build('Song successfully created');

    }



    public function view(Song $model)
    {
        $model->load(['cover' , 'genre' , 'language' , 'province']);
        return api()->data('model', $model)->build();
    }


    /**
     * @param Song $model
     * @return JsonResponse
     * @throws Exception
     */
    public function cart(Song $model)
    {
        $auth = auth()->user();
        $cart =  Cart::query()
            ->where('user_id' , $auth->id)
            ->where('state' , 'PENDING')->first();

        if (!$cart)
        {
            $cart =  Cart::query()->create([
                'user_id' => $auth->id,
                'state' => 'PENDING',
                'ref' => uniqid() . "." . uniqid()
            ]);
        }

        if (!CartItem::query()
            ->where('cart_id' , $cart->id)
            ->where('item_type' , Song::class)
            ->where('item_id' , $model->id)
            ->exists()
        ){
            $price =  System::value('SONG-PUBLISH-PRICE');

            CartItem::query()->create([
                'cart_id' => $cart->id,
                'item_type' => Song::class,
                'item_id' => $model->id,
                'price' => $price
            ]);

            $model->update([
                'is_in_cart' => true
            ]);

        }

        $model->load(['cover' , 'genre' , 'language' , 'province']);
        return api()->data('model', $model)->build("Song was successfully added to Cart");
    }


    public function delete(Song $model)
    {
        $model->delete();
        return api()->build("Song was successfully deleted");
    }

}
