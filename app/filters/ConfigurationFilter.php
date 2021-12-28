<?php
/** @noinspection MethodShouldBeFinalInspection */
/** @noinspection MissingParameterTypeDeclarationInspection */
namespace App\filters;


use App\filters\core\ModelFilter;
use Illuminate\Database\Eloquent\Builder;

class ConfigurationFilter extends ModelFilter
{
    protected  $filters = [
        'search',
        'startDate',
        'endDate',
    ];


    protected function startDate(Builder $builder, $value): Builder
    {
        return $builder->where('system_variables.created_at', '>=', carbon($value));
    }


    protected function endDate(Builder $builder, $value): Builder
    {
        return $builder->where('system_variables.created_at', '<=', carbon($value)->addDay()->subSecond());
    }


    protected  $equal = [
        'id',
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
        'key',
        'value',
        'description',
        'parameters',
    ];

}
