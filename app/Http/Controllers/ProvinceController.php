<?php

namespace App\Http\Controllers;

use App\filters\GenreFilter;
use App\filters\ProvinceFilter;
use App\Genre;
use App\Province;
use Illuminate\Http\Request;

class ProvinceController extends Controller
{
    public function list()
    {
        return api()->data('list', Province::all())->build();
    }


    public function index(ProvinceFilter $filter)
    {
        return api()->data(
            'list',  Province::filter($filter)->paginate(\request('size') ?? 30 )
        )->build();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' =>  ['required'],
            'description' =>  ['required'],
        ]);

        $model =  Province::query()->create([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
        ]);

        return api()->data('model', $model)->build("Province created");

    }

    public function view(Province $model)
    {
        return api()->data('model', $model)->build();
    }

    public function update(Province $model , Request $request)
    {
        $request->validate([
            'name' =>  ['required'],
            'description' =>  ['required'],
        ]);

        $model->update([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
        ]);

        return api()->data('model', $model)->build("Province updated");
    }

    public function delete(Province $model)
    {
        $model->delete();
        return api()->data('model', $model)->build("Province deleted");
    }
}
