<?php

namespace App\Http\Controllers;

use App\Album;
use App\Image;
use App\Jobs\OptimizeImage;
use App\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function update(Request $request)
    {

        /** @var User $user */
        $user = auth()->user();

        $request->validate([
            'name' => [ 'required'],
            'last_name' => [ 'required'],
            'email' => [ 'required' , 'email' , 'unique:users,email,' . $user->id ],
            'phone' => [ 'required' , 'starts_with:263' , 'digits:12'],
        ]);

        $user->update([
            'name' => $request->get('name'),
            'last_name' => $request->get('last_name'),
            'email' => $request->get('email'),
            'phone' => $request->get('phone'),
        ]);

        $user->load('cover');
        $p = $user->getAllPermissions();
        $user = $user->toArray();
        $user['permissions'] = $p;

        return api()->data('user', $user)->build('Your profile was successfully updated');

    }


    public function image(Request $request)
    {
        /** @var User $user */
        $user = auth()->user();

        $request->validate([
            'file' => [ 'required'],
        ]);

        $file = $request->file('file');
        $path = '/storage/' . $file->store('users' , 'public');

        /** @var Image $image */
        $image = Image::query()->updateOrCreate([
            'image_id' => $user->id,
            'image_type' => User::class,
            'key' => 'user-cover'
        ], [
            'name' => $file->getClientOriginalName(),
            'ext' => $file->getClientOriginalExtension(),
            'size' => $file->getSize(),
            'path' => $path,
            'user_id' => auth()->id(),
            'optimized' => false,
        ]);

        dispatch(new OptimizeImage($image, 'users'));

        $user->load(['cover' , 'artist']);
        $p = $user->getAllPermissions();
        $user = $user->toArray();
        $user['permissions'] = $p;

        return api()->data('user', $user)->build('Image was successfully uploaded');

    }
}
