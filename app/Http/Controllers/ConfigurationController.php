<?php

namespace App\Http\Controllers;

use App\filters\ConfigurationFilter;
use App\SystemVariables;
use Illuminate\Http\Request;

class ConfigurationController extends Controller
{
    public function index(ConfigurationFilter $filter)
    {
        return api()->data('list' , SystemVariables::filter($filter)->paginate(\request('size') ?? 30 ))->build();
    }

    public function view(SystemVariables $model)
    {
        return api()->data('model' , $model)->build();
    }

    public function update(Request $request , SystemVariables $model)
    {
        $request->validate([
            'value' => ['required']
        ]);

        $model->update([
            'value' => $request->get('value'),
            'description' => $request->get('description'),
            'parameters' => $request->get('parameters'),
        ]);

        return api()->data('model' , $model)->build('System Variable Updated');
    }






}
