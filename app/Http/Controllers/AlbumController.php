<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AlbumController extends Controller
{
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




    }
}
