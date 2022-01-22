<?php

namespace App;

use App\filters\core\HasModelFilter;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use OwenIt\Auditing\Auditable;
use Spatie\Permission\Traits\HasRoles;
use Spinen\QuickBooks\HasQuickBooksToken;

/**
 * @property mixed id
 * @property mixed name
 * @property mixed last_name
 * @property mixed email
 * @property mixed select_name
 * @property mixed password
 * @property mixed require_otp
 * @property mixed phone
 * @property mixed otp
 * @property mixed otp_expiry
 * @property Artist artist
 */
class User extends Authenticatable implements \OwenIt\Auditing\Contracts\Auditable
{
    use Notifiable , HasModelFilter , HasRoles , Auditable ,  Notifiable;

    protected $appends = [
        'select_name','avatar_name'
    ];

    protected $with = [ 'cover' , 'artist' ];

    public function getSelectNameAttribute()
    {
        return $this->name . " " . $this->last_name . " - " . $this->email;
    }

    public function getAvatarNameAttribute()
    {
        return strtoupper(substr($this->name ,  0 , 1 ).substr($this->last_name ,  0 , 1 ));
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','last_name' ,'status' , 'password_reset_token' , 'password_reset_token_expiry' , 'phone' , 'require_otp' , 'otp' , 'otp_expiry'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'password_reset_token' , 'password_reset_token_expiry'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];


    public function cover()
    {
        return $this->morphOne(
            Image::class,
            'image'
        )->where(
            'key' , '=' , 'user-cover'
        );
    }

    public function artist()
    {
        return $this->hasOne(
            Artist::class,
            'user_id',
            'id'
        );
    }

}
