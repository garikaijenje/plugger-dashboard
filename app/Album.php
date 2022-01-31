<?php

namespace App;

use App\Core\DefaultModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Album extends DefaultModel
{
    use HasFactory , SoftDeletes;


    protected $with = ['cover' , 'genre' , 'language' , 'province'];

    public function genre()
    {
        return $this->belongsToMany(Genre::class ,
            'album_genres',
            'genre_id',
            'album_id'
        )->withTimestamps();
    }

    public function language()
    {
        return $this->belongsToMany(Language::class ,
            'album_languages',
            'language_id',
            'album_id'
        )->withTimestamps();
    }

    public function cover()
    {
        return $this->morphOne(
            Image::class,
            'image'
        )->where(
            'key' , '=' , 'album-cover'
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

    public function songs()
    {
        return $this->hasMany(
            Song::class,
            'album_id',
            'id'
        );
    }

}
