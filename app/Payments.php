<?php

namespace App;

use App\Core\DefaultModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed poll_link
 * @property mixed cart_id
 * @property mixed id
 */
class Payments extends DefaultModel
{
    use HasFactory;
}
