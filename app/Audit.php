<?php

namespace App;

use App\Entities\core\Role;
use App\filters\core\HasModelFilter;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * @property Carbon created_at
 */
class Audit extends \OwenIt\Auditing\Models\Audit
{
    use HasModelFilter;

    protected $appends = [
        'last_update' , 'created_at_read'
    ];

    public function getAuditableTypeAttribute($value){

        $config = [
            User::class => 'User',
            Transaction::class => 'Transaction',
            Zesa::class => 'zesa',
            Airtime::class => 'zesa',
            StripePayment::class => 'stripe',
            EcocashPayment::class => 'ecocash',
            MeterNumber::class => 'meter',
        ];

        if (isset($config[$value]))
        {
            return $config[$value];
        }

        return "";


    }

    public function getEventAttribute($value)
    {
        return strtoupper($value);
    }

    /**
     * @return string
     */
    public function getLastUpdateAttribute() : string
    {
        return $this->created_at->diffForHumans();
    }

    /**
     * @return string
     */
    public function getCreatedAtReadAttribute() : string
    {
        return $this->created_at->format("Y-m-d H:i:s");
    }
}
