<?php

namespace App\Http\Controllers;

use App\filters\LanguageFilter;
use App\Language;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function list()
    {
        return api()->data('list', Language::all())->build();
    }


    public function index(LanguageFilter $filter)
    {
        return api()->data(
            'list',  Language::filter($filter)->paginate(\request('size') ?? 30 )
        )->build();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' =>  ['required'],
            'description' =>  ['required'],
        ]);

        $model =  Language::query()->create([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
        ]);

        return api()->data('model', $model)->build("Language created");

    }

    public function view(Language $model)
    {
        return api()->data('model', $model)->build();
    }

    public function update(Language $model , Request $request)
    {
        $request->validate([
            'name' =>  ['required'],
            'description' =>  ['required'],
        ]);

        $model->update([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
        ]);

        return api()->data('model', $model)->build("Language updated");
    }

    public function delete(Language $model)
    {
        $model->delete();
        return api()->data('model', $model)->build("Language deleted");
    }
}
