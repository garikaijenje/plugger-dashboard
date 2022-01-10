<?php

use App\Album;
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\AuditController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ConfigurationController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\User;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//Route::fallback([HomeController::class , 'welcome']);
Route::get('/', [HomeController::class , 'welcome']);


Route::middleware('guest')->group(function (){
    Route::get('/login' , [ AuthController::class , 'loginView' ])->name('login');
    Route::get('/register' , [ AuthController::class , 'registerView' ])->name('register');
    Route::post('/login' , [ AuthController::class , 'login']);
    Route::post('/login/otp' , [ AuthController::class , 'loginOTP']);
    Route::post('/register' , [ AuthController::class , 'register']);
});

Route::post('/logout' , [AuthController::class , 'logout'])->name('logout');
Route::get('/reset' , [AuthController::class , 'getResetForm']);
Route::post('/password/reset' , [AuthController::class , 'reset']);
Route::post('/reset' , [AuthController::class , 'resetPassword']);


Route::prefix('genre')->group(function (){
    Route::get('/list' , [GenreController::class , 'list']);
});

Route::middleware('auth')->group(function (){

    Route::prefix('album')->group(function (){
        Route::post('/create' , [AlbumController::class , 'create']);
    });

});

// Admin Site

Route::prefix('admin')->group(function (){
    

    Route::middleware('auth')->group(function (){

        Route::post('/password' , [AuthController::class , 'password']);
        Route::get('/', [HomeController::class , 'index'])->name('home');
        Route::prefix('portal')->group(function (){

            // Dashboard

            Route::get('/dashboard', [HomeController::class , 'dashboard'])->name('dashboard');

            /*
             * Users
             *
             */

            Route::prefix('users')->group(function (){
                Route::get('/' ,  [UserController::class , 'index']);
                Route::post('/create' ,  [UserController::class , 'store']);
                Route::get('/{model}/view' ,  [UserController::class , 'view']);
                Route::get('/{model}/activate' ,  [UserController::class , 'activate']);
                Route::get('/{model}/deactivate' ,  [UserController::class , 'deactivate']);
                Route::post('/{model}/update' ,  [UserController::class , 'update']);
            });

            Route::prefix('roles')->group(function (){
                Route::get('/' ,  [RoleController::class , 'index']);
                Route::post('/create' ,  [RoleController::class , 'store']);
                Route::get('/{model}/view' ,  [RoleController::class , 'view']);
                Route::post('/{model}/update' ,  [RoleController::class , 'update']);
            });

            Route::prefix('configuration')->group(function (){
                Route::get('/' ,  [ConfigurationController::class , 'index']);
                Route::get('/{model}/view' ,  [ConfigurationController::class , 'view']);
                Route::post('/{model}/update' ,  [ConfigurationController::class , 'update']);
            });

            Route::prefix('permissions')->group(function (){
                Route::get('/' ,  [PermissionController::class , 'index']);
            });

            /*
             * Audits
             */

            Route::prefix('audits')->group(function (){
                Route::get('/' ,  [AuditController::class , 'timeline']);
                Route::get('/{model}/view' ,  [AuditController::class , 'view']);
            });

        });

        // Restore Routing to Vue js from fresh link
//        Route::get('/{any}' , [HomeController::class , 'index'])->where('any', '.*');
    });
});

