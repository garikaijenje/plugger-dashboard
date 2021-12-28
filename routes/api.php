<?php

use App\Http\Controllers\AgentController;
use App\Http\Controllers\IntegrationController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::prefix('v1')->group(function (){
    Route::post('topups' , [IntegrationController::class , 'rechargeNetone']);
    Route::prefix('bot')->group(function (){
        Route::post('tickets', [IntegrationController::class , 'notifyAgents']);
        Route::post('invocations', [IntegrationController::class , 'storeInvocations']);
    });
});

Route::get('v1/zesa/whatsapp-tokens', [IntegrationController::class , 'buyToken']);
Route::get('/zesa/v1/tokens/{token}', [IntegrationController::class , 'checkTokenStatus']);
Route::get('zesa/v1/meters/{number}', [IntegrationController::class , 'checkMeter']);
Route::post('v1/bot/campaigns/hi-magesti/conversions', [IntegrationController::class , 'conversions']);


Route::prefix('agents')->group(function (){
    Route::get('/check' , [AgentController::class , 'checkAgent']);
    Route::post('/register' , [AgentController::class , 'registerAgent']);
    Route::post('/purchase/airtime/netone' , [AgentController::class , 'purchaseNetOneAirtime']);
});