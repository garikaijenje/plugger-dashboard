<?php

namespace App\Http\Controllers;

use App\filters\GenreFilter;
use App\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function list()
    {
        return api()->data('list', Genre::all())->build();
    }


    public function index(GenreFilter $filter)
    {
        return api()->data(
            'list',  Genre::filter($filter)->paginate(\request('size') ?? 30 )
            )->build();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' =>  ['required'],
            'description' =>  ['required'],
        ]);

        $model =  Genre::query()->create([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
        ]);

        return api()->data('model', $model)->build("Genre created");

    }

    public function view(Genre $model)
    {
        return api()->data('model', $model)->build();
    }

    public function update(Genre $model , Request $request)
    {
        $request->validate([
            'name' =>  ['required'],
            'description' =>  ['required'],
        ]);

        $model->update([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
        ]);

        return api()->data('model', $model)->build("Genre updated");
    }

    public function delete(Genre $model)
    {
        $model->delete();
        return api()->data('model', $model)->build("Genre deleted");
    }
}
