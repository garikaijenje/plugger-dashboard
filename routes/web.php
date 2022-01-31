<?php

use App\Album;
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\AuditController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ConfigurationController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProvinceController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SongController;
use App\Http\Controllers\UserController;
use App\Language;
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
Route::get('/genre/list' , [GenreController::class , 'list']);
Route::get('/province/list' , [ProvinceController::class , 'list']);
Route::get('/language/list' , [LanguageController::class , 'list']);

Route::get('/paynow/callback' , [CartController::class , 'confirm']);


Route::middleware('auth')->group(function (){
    Route::prefix('site')->group(function (){
        Route::prefix('library')->group(function (){

            Route::post('/albums' , [AlbumController::class , 'create']);
            Route::get('/albums' , [AlbumController::class , 'index']);
            Route::get('/albums/{model}/view' , [AlbumController::class , 'view']);
            Route::get('/albums/{model}/songs' , [AlbumController::class , 'songs']);
            Route::get('/albums/{model}/delete' , [AlbumController::class , 'delete']);
            Route::post('/albums/{model}/edit' , [AlbumController::class , 'update']);
            Route::get('/albums/{model}/cart' , [AlbumController::class , 'cart']);

            Route::post('/songs' , [SongController::class , 'create']);
            Route::get('/songs' , [SongController::class , 'index']);
            Route::get('/songs/{model}/view' , [SongController::class , 'view']);
            Route::post('/songs/{model}/edit' , [SongController::class , 'edit']);
            Route::get('/songs/{model}/delete' , [SongController::class , 'delete']);
            Route::get('/songs/{model}/cart' , [SongController::class , 'cart']);

            Route::post('/profile/edit' , [ProfileController::class , 'update']);
            Route::post('/profile/image' , [ProfileController::class , 'image']);
            Route::post('/artist/edit' , [ArtistController::class , 'update']);


            Route::get('/cart' , [CartController::class , 'view']);
            Route::get('/cart/payment' , [CartController::class , 'payment']);


            Route::get('/payments' , [PaymentController::class , 'index']);
        });
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

            // Genre

            Route::prefix('genre')->group(function (){
                Route::get('/' ,  [GenreController::class , 'index']);
                Route::post('/create' ,  [GenreController::class , 'store']);
                Route::get('/{model}/view' ,  [GenreController::class , 'view']);
                Route::post('/{model}/update' ,  [GenreController::class , 'update']);
            });

            // Province

            Route::prefix('province')->group(function (){
                Route::get('/' ,  [ProvinceController::class , 'index']);
                Route::post('/create' ,  [ProvinceController::class , 'store']);
                Route::get('/{model}/view' ,  [ProvinceController::class , 'view']);
                Route::post('/{model}/update' ,  [ProvinceController::class , 'update']);
            });

            // Language

            Route::prefix('language')->group(function (){
                Route::get('/' ,  array(LanguageController::class , 'index'));
                Route::post('/create' ,  [LanguageController::class , 'store']);
                Route::get('/{model}/view' ,  [LanguageController::class , 'view']);
                Route::post('/{model}/update' ,  [LanguageController::class , 'update']);
            });


        });

        // Restore Routing to Vue js from fresh link
//        Route::get('/{any}' , [HomeController::class , 'index'])->where('any', '.*');
    });
});

