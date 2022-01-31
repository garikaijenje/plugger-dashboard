<?php

namespace App\Http\Controllers;

use App\Cart;
use App\Jobs\ConfirmPaynowTransaction;
use App\Payments;
use Illuminate\Http\Request;
use Paynow\Http\ConnectionException;
use Paynow\Payments\HashMismatchException;
use Paynow\Payments\InvalidIntegrationException;
use Paynow\Payments\Paynow;

class CartController extends Controller
{
    public function view()
    {
        $auth = auth()->user();
        $cart =  Cart::query()
            ->where('user_id' , $auth->id)
            ->where('state' , 'PENDING')->latest()->first();

        if (!$cart)
        {
            $cart =  Cart::query()->create([
                'user_id' => $auth->id,
                'state' => 'PENDING',
                'ref' => uniqid() . "." . uniqid()
            ]);
        }

        $cart->load('items.song');
        $total = collect($cart->items)->sum('price');
        return api()
                ->data('total', $total)
                ->data('model', $cart)
            ->build();

    }

    public function confirm(Request $request)
    {
        $code = $request->get('code');
        $payment =  Payments::query()->where('ref' , '=' , $code)->first();
        if ($payment)
        {
           $this->dispatch(new ConfirmPaynowTransaction($payment));
           return redirect(config('app.url') . "/?context=paynow&id={$payment->id}");
        }
        return redirect(config('app.url'));
    }


    public function payment(Request $request)
    {
        $code = uniqid() . "." . uniqid();
        $auth = auth()->user();
        $cart =  Cart::query()
            ->where('user_id' , $auth->id)
            ->where('state' , 'PENDING')->latest()->first();

        if (!$cart)
        {
            $cart =  Cart::query()->create([
                'user_id' => $auth->id,
                'state' => 'PENDING',
                'ref' => uniqid() . "." . uniqid()
            ]);
        }

        $cart->load('items.song');
        $total = collect($cart->items)->sum('price');

        $paynow = new Paynow(
            config('system.id'),
            config('system.key'),
            config('app.url').'/paynow/callback?code=' . $code,
            config('app.url').'/paynow/callback?code=' . $code
        );

        $payment = $paynow->createPayment('Invoice #' . $cart->id ,  $request->get('email') ?  $request->get('email') : $auth->email);
        $payment->add('Invoice', $total);
        try {

            $response = $paynow->send($payment);
            if($response->success())
            {
                $payment = Payments::query()->create([
                    'email' => $request->get('email'),
                    'phone' => $request->get('phone'),
                    'name' => $request->get('name'),
                    'ref' => $code,
                    'cart_id' => $cart->id,
                    'cart_ref' => $cart->ref,
                    'user_id' => $auth->id,
                    'state' => 'PENDING',
                    'amount' =>  $total
                ]);

                foreach ($cart->items as $item)
                {
                    $item->item->update([
                        'payment_id' => $payment->id
                    ]);
                }

                $link = $response->redirectUrl();
                $pollUrl = $response->pollUrl();

                $payment->update([
                    'link' => $link,
                    'poll_link' => $pollUrl,
                ]);

                $meta = [
                    'link' => $link,
                    'pollUrl' => $pollUrl,
                    'code' => $cart->ref,
                ];

                return api()->data('meta', $meta)->success()->build('You will be redirected to Checkout');
            }

        } catch (ConnectionException $e) {
        } catch (HashMismatchException $e) {
        } catch (InvalidIntegrationException $e) {}

        return api()->fail()->build('There was a problem with proceeding with payment');
    }
}
