<?php
/** @noinspection MethodShouldBeFinalInspection */
/** @noinspection MissingParameterTypeDeclarationInspection */
namespace App\filters;


use App\filters\core\ModelFilter;

class AlbumFilter extends ModelFilter
{
    protected  $filters = [
        'search'
    ];
    protected  $equal = [
        'id',
        'user_id'
    ];
    protected  $dates = [
        'created_at',
        'updated_at'
    ];
    protected  $sort = [
        'id',
        'created_at',
        'updated_at',
    ];

    protected $search = [
      'name',
      'artist',
      'description',
    ];

}
