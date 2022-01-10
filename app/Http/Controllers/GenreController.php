<?php

namespace App\Http\Controllers;

use App\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function list()
    {
        return api()->data('list', Genre::all())->build();
    }
}
