<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCajaRetirosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('caja_retiros', function (Blueprint $table) {
            $table->increments('id');
            $table->float('retiro');
            $table->string('descripcion');
            $table->integer('caja_id')->unsigned();
            $table->foreign('caja_id')->references('id')->on('cajas');
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
        Schema::dropIfExists('caja_retiros');
    }
}
