<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class ArtistController extends Controller
{
    public function update(Request $request)
    {

        /** @var User $user */
        $user = auth()->user();

        $request->validate([
            'stage_name' => [ 'required'],
            'nationality' => [ 'required'],
            'national_id' => [ 'required'],
            'start_year' => [ 'required'],
            'marital_status' => [ 'required'],
            'n_name' => [ 'required'],
            'n_last_name' => [ 'required'],
            'n_phone' => [ 'required'],
            'n_email' => [ 'required'],
        ]);

        $user->artist->update([
            'stage_name' => $request->get('stage_name'),
            'nationality' => $request->get('nationality'),
            'national_id' => $request->get('national_id'),
            'start_year' => $request->get('start_year'),
            'marital_status' => $request->get('marital_status'),
            'booking_number' => $request->get('booking_number'),
            'facebook' => $request->get('facebook'),
            'instagram' => $request->get('instagram'),
            'twitter' => $request->get('twitter'),
            'tiktok' => $request->get('tiktok'),
            'n_name' => $request->get('n_name'),
            'n_last_name' => $request->get('n_last_name'),
            'n_phone' => $request->get('n_phone'),
            'n_email' => $request->get('n_email'),
        ]);

        $user->load(['cover' , 'artist']);
        $p = $user->getAllPermissions();
        $user = $user->toArray();
        $user['permissions'] = $p;

        return api()->data('user', $user)->build('Your profile was successfully updated');

    }
}
