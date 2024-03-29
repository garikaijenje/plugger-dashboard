<?php

namespace App;

use App\Core\DefaultModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property mixed id
 * @property mixed state_code
 */
class Song extends DefaultModel
{
    use HasFactory , SoftDeletes;


    protected $with = ['genre' , 'language' , 'cover' , 'province' , 'state'];

    public function genre()
    {
        return $this->belongsToMany(Genre::class ,
            'song_genres',
            'genre_id',
            'song_id'
        )->withTimestamps();
    }

    public function language()
    {
        return $this->belongsToMany(Language::class ,
            'song_languages',
            'language_id',
            'song_id'
        )->withTimestamps();
    }

    public function cover()
    {
        return $this->morphOne(
            Image::class,
            'image'
        )->where(
            'key' , '=' , 'song-cover'
        );
    }

    public function province()
    {
        return $this->hasOne(
            Province::class,
            'id',
            'province_id'
        );
    }

    public function state()
    {
        return $this->hasOne(
            State::class,
            'code',
            'state_code'
        );
    }



}
