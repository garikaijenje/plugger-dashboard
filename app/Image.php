<?php

namespace App;

use App\Core\DefaultModel;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed name
 * @property mixed path
 * @property mixed image_type
 */
class Image extends DefaultModel
{
    public function user()
    {
        return $this->hasOne(User::class , 'id' , 'user_id');
    }
}
