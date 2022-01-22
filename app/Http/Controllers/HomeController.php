<?php

namespace App\Http\Controllers;

use App\Complaint;
use App\filters\TransactionFilter;
use App\Service\EconetAirtimeService;
use App\Service\NetoneAirtimeService;
use App\System;
use App\Transaction;
use App\User;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;

class HomeController extends Controller
{
    
    /**
     * Show the application dashboard.
     *
     * @return Renderable
     */
    public function index()
    {
        /** @var User $user */
        $user = auth()->user();
        $user->load('cover');
        $p = $user->getAllPermissions();
        $user = $user->toArray();
        $user['permissions'] = $p;
        return view('home' , [
            'user' => $user
        ]);
    }

    public function dashboard(TransactionFilter $filter)
    {
        $start =  \request()->get('start') ? carbon(\request()->get('start')) : now()->subSeconds(now()->secondsSinceMidnight());
        $end = \request()->get('end') ? carbon(\request()->get('end'))->addDay()->subSecond()   : now()->addDay()->subSeconds(now()->secondsSinceMidnight());


        $summary = [];

        $summary['total']  = Transaction::filter($filter, [
            'start' =>  $start->format('Y-m-d'),
            'end' =>  $end->format('Y-m-d'),
        ])->count();

        $sum = Transaction::filter($filter, [
            'start' =>  $start->format('Y-m-d'),
            'end' =>  $end->format('Y-m-d'),
        ])->where('state' , 'COMPLETED')->where('currency' , 'ZWL')->sum('rated_amount');

        $summary['total_zwl']  = number_format((floatval($sum)), 2, '.', ' ');

        $sum = Transaction::filter($filter, [
            'start' =>  $start->format('Y-m-d'),
            'end' =>  $end->format('Y-m-d'),
        ])->where('state' , 'COMPLETED')->where('currency' , 'USD')->sum('amount');

        $summary['total_usd']  = number_format((floatval($sum)), 2, '.', ' ');

        $summary['failed']  = Transaction::filter($filter, [
            'start' =>  $start->format('Y-m-d'),
            'end' =>  $end->format('Y-m-d'),
        ])->where('state' ,'!=', 'COMPLETED')->count();

        $summary['completed'] = $summary['total'] - $summary['failed'];
        $summary['sla'] = (int)($summary['completed'] / ( $summary['total'] ? $summary['total'] : 1) * 100);
        $summary['details'] = Transaction::filter($filter, [
            'start' =>  $start->format('Y-m-d'),
            'end' =>  $end->format('Y-m-d'),
        ])->groupBy(DB::raw("transaction_type , payment_type , state , channel ,scope , currency"))
        ->get(DB::raw("transaction_type  , payment_type , state , channel , scope , currency , 
                    count(transaction_type) as type_count , count(payment_type) as payment_count  ,
                    count(state) as state_count , count(channel) as channel_count , count(scope) as scope_count , count(currency) as currency_count ,
                    sum(amount) as amount_sum , sum(rated_amount) as rated_sum"));

        return api()
                ->data('summary' , $summary )
            ->build();

    }

    public function welcome()
    {

        $user = null;

        if (auth()->check())
        {
            /** @var User $user */
            $user = auth()->user();
            $user->load('cover');
            $p = $user->getAllPermissions();
            $user = $user->toArray();
            $user['permissions'] = $p;
        }

        return view('welcome' , [
            'user' => $user
        ]);
    }

    public function agent(NetoneAirtimeService $service)
    {
        return api()->data('agentBalance', $service->checkAgentBalance(uniqid() . '-' . uniqid())['balance'])->build();
    }

    public function econet(EconetAirtimeService $service)
    {
        return api()->data('agentBalance', $service->checkAgentBalance()['balance'])->build();
    }


}
