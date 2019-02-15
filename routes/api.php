<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/v1')->group(function() {

    Route::prefix('/clientes')->name('clientes.')->group(function() {
        Route::get('/get', 'ClienteController@clientes')->name('get');
        Route::get('/get/{id}', 'ClienteController@cliente')->name('single');
        Route::put('/{id}', 'ClienteController@update')->name('update');
        Route::post('/{id}', 'ClienteController@store')->name('store');
        Route::delete('/{id}', 'ClienteController@delete')->name('delete');
    });
    
});