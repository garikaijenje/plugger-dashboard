<?php

namespace App\Jobs;

use App\Cart;
use App\Payments;
use App\Song;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Paynow\Http\ConnectionException;
use Paynow\Payments\HashMismatchException;
use Paynow\Payments\Paynow;

class ConfirmPaynowTransaction implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $payment;

    /**
     * Create a new job instance.
     *
     * @param $payment
     */
    public function __construct($payment)
    {
        $this->payment = $payment;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        /** @var Payments $payment */
        $payment = $this->payment;
        $code =  $payment->ref;

        $paynow = new Paynow(
            config('system.id'),
            config('system.key'),
            config('app.url').'/paynow/callback?code=' . $code,
            config('app.url').'/paynow/callback?code=' . $code
        );

        try {

            $status = $paynow->pollTransaction($payment->poll_link);
            if($status->paid())
            {
                $payment->update([
                    'state' => 'COMPLETED',
                    'completed_at' => now()
                ]);

                $songs = Song::query()->where('payment_id' , '=' , $payment->id)->get();
                /** @var Cart $cart */
                $cart = Cart::query()->where('id' , '=' , $payment->cart_id)->first();

                foreach ($songs as $song)
                {
                    $song->update([
                        'state_code' => '02'
                    ]);
                }

                $cart->update([
                    'state' => 'COMPLETED'
                ]);

            } else {
                $payment->update([
                    'state' => 'FAILED'
                ]);
            }
        } catch (ConnectionException $e) {
        } catch (HashMismatchException $e) {
        }
    }
}
