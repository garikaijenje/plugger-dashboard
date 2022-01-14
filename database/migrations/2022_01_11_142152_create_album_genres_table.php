<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlbumGenresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('album_genres', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('album_id');
            $table->bigInteger('genre_id');
            $table->timestamps();

            $table->index(['album_id' , 'genre_id']);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('album_genres');
    }
}
