<?php

return [
    'adapter' => env('ECOCASH_ADAPTER' , 'http://127.0.0.1:9070') ,
    'merchant' => [
        'username' => env('ECOCASH_MERCHANT_USERNAME'),
        'password' => env('ECOCASH_MERCHANT_PASSWORD'),
        'pin' => env('ECOCASH_MERCHANT_PIN'),
        'code' => env('ECOCASH_MERCHANT_CODE'),
        'number' => env('ECOCASH_MERCHANT_NUMBER'),
        'endpoint' => env('ECOCASH_MERCHANT_ENDPOINT'),
    ],

    'paynow' => [
        'endpoint' => env('ECOCASH_PAYNOW_ENDPOINT', 'https://paynow-ecocash-payments.herokuapp.com')
    ]
];
