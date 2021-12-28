<?php
/** @noinspection MethodShouldBeFinalInspection */
/** @noinspection MissingParameterTypeDeclarationInspection */
namespace App\filters;


use App\filters\core\ModelFilter;
use App\User;
use Illuminate\Database\Eloquent\Builder;

class AuditFilter extends ModelFilter
{
    protected  $filters = [
        'search',
        'startDate',
        'endDate',
    ];

    protected function startDate(Builder $builder, $value): Builder
    {
        return $builder->where('audits.created_at', '>=', carbon($value));
    }

    protected function endDate(Builder $builder, $value): Builder
    {
        return $builder->where('audits.created_at', '<=', carbon($value));
    }



    protected  $equal = [
        'auditable_type',
        'auditable_id',
        'user_id',
        'event'
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
        'old_values',
        'new_values',
        'user.name',
        'user.email',
        'user.last_name',
    ];

    protected $morphs  = [
        User::class
    ];

}
