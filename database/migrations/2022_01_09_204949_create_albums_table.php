<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlbumsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('albums', function (Blueprint $table) {
            $table->id();
            $table->string('artist')->nullable();
            $table->bigInteger('artist_id')->nullable();
            $table->bigInteger('genre_id')->nullable();
            $table->text('description')->nullable();
            $table->string('cover')->nullable();
            $table->string('cover_sm')->nullable();
            $table->string('cover_md')->nullable();
            $table->string('cover_lg')->nullable();
            $table->string('cover_original')->nullable();
            $table->string('cover_optimized')->nullable();
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
        Schema::dropIfExists('albums');
    }
}
