<?php

Route::get('/{any}', 'Controller@index')->where('any', '.*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::prefix('/clientes')->name('clientes.')->group(function () {
    Route::get('/get', 'ClienteController@clientes')->name('get');
    Route::get('/get/{id}', 'ClienteController@cliente')->name('single');
    Route::put('/{id}', 'ClienteController@update')->name('update');
    Route::post('/store', 'ClienteController@store')->name('store');
    Route::delete('/{id}', 'ClienteController@delete')->name('delete');
});

Route::prefix('/servicios')->name('servicios.')->group(function () {
    Route::get('/get', 'ServicioController@servicios')->name('get');
    Route::get('/get/{id}', 'ServicioController@servicios')->name('single');
    Route::put('/{id}', 'ServicioController@update')->name('update');
    Route::post('/store', 'ServicioController@store')->name('store');
    Route::delete('/{id}', 'ServicioController@delete')->name('delete');
});

Route::prefix('/repuestos')->name('repuestos.')->group(function () {
    Route::get('/get', 'RepuestoController@repuestos')->name('get');
    Route::get('/get/{id}', 'RepuestoController@repuesto')->name('single');
    Route::put('/{id}', 'RepuestoController@update')->name('update');
    Route::post('/store', 'RepuestoController@store')->name('store');
    Route::delete('/{id}', 'RepuestoController@delete')->name('delete');
});

Route::prexif('/equipos')->name('equipos.')->group(function () {
    Route::get('/get', 'EquipoController@equipos')->name('get');
    Route::put('/{id}', 'EquipoController@update')->name('update');
    Route::post('/store', 'EquipoController@store')->name('store');
    Route::delete('/{id}', 'EquipoController@delete')->name('delete');
});