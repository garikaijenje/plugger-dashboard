<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->id();

            $table->morphs('image');

            $table->integer('user_id')->nullable();
            $table->string('small')->nullable();
            $table->string('medium')->nullable();
            $table->string('large')->nullable();
            $table->string('path')->nullable();
            $table->boolean('optimized')->nullable();
            $table->boolean('cover')->nullable();
            $table->string('name')->nullable();
            $table->string('ext')->nullable();
            $table->string('size')->nullable();
            $table->string('key')->nullable();
            $table->timestamp('confirmed')->nullable();

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
        Schema::dropIfExists('images');
    }
}
