<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSongsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('songs', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('artist_id')->nullable();
            $table->string('artist_name')->nullable();
            $table->string('duration')->nullable();
            $table->string('ref')->nullable();
            $table->string('state_code')->nullable();
            $table->string('type')->nullable();


            $table->string('album_title')->nullable();

            $table->string('writer')->nullable();
            $table->string('copyrights')->nullable();
            $table->string('arranger')->nullable();

            $table->string('song_title')->nullable();
            $table->string('studio_name')->nullable();
            $table->string('studio_producer')->nullable();

            $table->string('instrumental_path')->nullable();
            $table->string('instrumental_name')->nullable();
            $table->text('description')->nullable();

            $table->string('song_path')->nullable();
            $table->string('song_name')->nullable();
            $table->string('video_path')->nullable();
            $table->string('video_name')->nullable();

            $table->integer('track_number')->nullable();
            $table->bigInteger('album_id')->nullable();
            $table->bigInteger('user_id')->nullable();
            $table->bigInteger('province_id')->nullable();
            $table->timestamp('release_date')->nullable();
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
        Schema::dropIfExists('songs');
    }
}
