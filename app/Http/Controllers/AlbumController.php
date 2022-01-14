<?php

namespace App\Http\Controllers;

use App\Album;
use App\filters\AlbumFilter;
use App\Image;
use App\Jobs\OptimizeImage;
use Illuminate\Http\Request;

class AlbumController extends Controller
{

    public function index(AlbumFilter $filter)
    {
        return api()
                ->data('list', Album::filter($filter , [
                    'user_id' => auth()->id()
                ])->with(['cover' , 'genre'])->paginate(\request('size') ?? 30))
            ->build();
    }

    public function create(Request $request)
    {
        $request->validate([
            'file' => ['required'],
            'album' => ['required'],
            'genre' => ['required'],
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
            'user_id' => auth()->id(),
        ]);

        $album->genre()->sync(
            explode(',', $request->get('genreIDs'))
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
}
