<?php

namespace App\Http\Controllers;

use App\Album;
use App\filters\AlbumFilter;
use App\filters\PaymentFilter;
use App\Payments;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index(PaymentFilter $filter)
    {
        return api()
            ->data('list', Payments::filter($filter , [
                'user_id' => auth()->id()
            ])->paginate(\request('size') ?? 30))
            ->build();
    }
}
