<?php

namespace App;

use App\Core\DefaultModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItem extends DefaultModel
{
    use HasFactory;


    public function song()
    {
        return $this->morphTo('item');
    }

}
