<?php

namespace App\Http\Controllers;

use App\Album;
use App\Cart;
use App\CartItem;
use App\filters\AlbumFilter;
use App\Image;
use App\Jobs\OptimizeImage;
use App\Service\System;
use App\Song;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AlbumController extends Controller
{

    public function index(AlbumFilter $filter)
    {
        return api()
                ->data('list', Album::filter($filter , [
                    'user_id' => auth()->id()
                ])->with(['cover' , 'genre' , 'language' , 'province'])->paginate(\request('size') ?? 30))
            ->build();
    }

    public function create(Request $request)
    {
        $request->validate([
            'file' => ['required'],
            'album' => ['required'],
            'genreIDs' => ['required'],
            'languageIDs' => ['required'],
            'province' => ['required'],
            'artist' => ['required_without:artist_id'],
            'artist_id' => ['required_without:artist'],
            'description' => ['required'],
        ]);


        /** @var Album $album */
        $album =  Album::query()->create([
            'artist' => $request->get('artist'),
            'name' => $request->get('album'),
            'description' => $request->get('description'),
            'artist_id' => $request->get('artist_id'),
            'province_id' => $request->get('province'),
            'user_id' => auth()->id(),
        ]);

        $album->genre()->sync(
            explode(',', $request->get('genreIDs'))
        );

        $album->language()->sync(
            explode(',', $request->get('languageIDs'))
        );

        $file = $request->file('file');
        $path = '/storage/' . $file->store('album' , 'public');

        /** @var Image $image */
        $image = Image::query()->create([
            'image_id' => $album->id,
            'image_type' => Album::class,
            'name' => $file->getClientOriginalName(),
            'ext' => $file->getClientOriginalExtension(),
            'size' => $file->getSize(),
            'path' => $path,
            'user_id' => auth()->id(),
            'optimized' => false,
            'key' => 'album-cover'
        ]);


        $this->dispatch(new OptimizeImage($image, 'album'));

        $album->load(['cover' , 'genre']);
        
        return api()->data('model', $album)->build('Album successfully created');
    }

    public function update(Request $request , Album $model)
    {
        $request->validate([
            'album' => ['required'],
            'genreIDs' => ['required'],
            'languageIDs' => ['required'],
            'province' => ['required'],
            'artist' => ['required_without:artist_id'],
            'artist_id' => ['required_without:artist'],
            'description' => ['required'],
        ]);


        /** @var Album $album */
        $model->update([
            'artist' => $request->get('artist'),
            'name' => $request->get('album'),
            'description' => $request->get('description'),
            'artist_id' => $request->get('artist_id'),
            'province_id' => $request->get('province'),
            'user_id' => auth()->id(),
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
                'image_type' => Album::class,
            ],[
                'name' => $file->getClientOriginalName(),
                'ext' => $file->getClientOriginalExtension(),
                'size' => $file->getSize(),
                'path' => $path,
                'user_id' => auth()->id(),
                'optimized' => false,
                'key' => 'album-cover'
            ]);

            $this->dispatch(new OptimizeImage($image, 'album'));
        }

        $model->load(['cover' , 'genre']);

        return api()->data('model', $model)->build('Album successfully created');
    }

    public function view(Album $model)
    {
        $model->load(['cover' , 'genre' , 'language' , 'province']);
        return api()->data('model', $model)->build();
    }


    public function songs(Album $model)
    {
        $songs =  $model->songs()->orderBy('track_number' ,'asc')->get();
        return api()->data('songs', $songs)->build();
    }


    /**
     * @param Album $model
     * @return JsonResponse
     * @throws Exception
     */
    public function cart(Album $model)
    {
        $auth = auth()->user();
        $album = $model;
        $songs = $album->songs;

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


        $price =  System::value('SONG-PUBLISH-PRICE');

        foreach ($songs as $model)
        {
            if ($model->state_code !== "01")
            {
                continue;
            }

            if (!CartItem::query()
                ->where('cart_id' , $cart->id)
                ->where('item_type' , Song::class)
                ->where('item_id' , $model->id)
                ->exists()
            ){
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
        }

        return api()->data('model', $album)->build("Album was successfully added to Cart");
    }


    public function delete(Album $model)
    {
        $songs = $model->songs;

        foreach ($songs as $song)
        {
            /** @var Song $song */
            $song->delete();
        }

        $model->delete();

        return api()->build("Album was successfully deleted");
    }

}
