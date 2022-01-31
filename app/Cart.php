<?php

namespace App;

use App\Core\DefaultModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cart extends DefaultModel
{
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s'
    ];


    public function items()
    {
        return $this->hasMany(CartItem::class , 'cart_id' , 'id');
    }
}
