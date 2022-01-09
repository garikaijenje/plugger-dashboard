<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('last_name');
            $table->string('phone');
            $table->string('email')->unique();
            $table->boolean('status')->default(false);
            $table->boolean('require_otp')->default(false);
            $table->string('type')->default('individual');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('ip')->nullable();
            $table->timestamp('last_login')->nullable();
            $table->string('password');
            $table->integer('attempts')->nullable();
            $table->string('otp')->nullable();
            $table->string('password_reset_token')->nullable();
            $table->timestamp('password_expiry')->nullable();
            $table->timestamp('password_reset_token_expiry')->nullable();
            $table->timestamp('otp_expiry')->nullable();
            $table->timestamp('password_reset')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
