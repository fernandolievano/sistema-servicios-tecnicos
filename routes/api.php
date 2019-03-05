<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/v1')->group(function () {
    Route::prefix('/clientes')->name('clientes.')->group(function () {
        Route::get('/get', 'ClienteController@clientes')->name('get');
        Route::get('/get/{id}', 'ClienteController@cliente')->name('single');
        Route::put('/update/{id}', 'ClienteController@update')->name('update');
        Route::post('/store', 'ClienteController@store')->name('store');
        Route::delete('/delete/{id}', 'ClienteController@delete')->name('delete');
    });
    Route::prefix('/servicios')->name('servicios.')->group(function () {
        Route::get('/get', 'ServicioController@servicios')->name('get');
        Route::get('/get/{id}', 'ServicioController@servicios')->name('single');
        Route::put('/update/{id}', 'ServicioController@update')->name('update');
        Route::post('/store', 'ServicioController@store')->name('store');
        Route::delete('/{id}', 'ServicioController@delete')->name('delete');
    });
    Route::prefix('/repuestos')->name('repuestos.')->group(function () {
        Route::get('/get', 'RepuestoController@repuestos')->name('get');
        Route::get('/get/{id}', 'RepuestoController@repuesto')->name('single');
        Route::put('/update/{id}', 'RepuestoController@update')->name('update');
        Route::put('/update/stock/{id}', 'RepuestoController@stock')->name('stock');
        Route::post('/store', 'RepuestoController@store')->name('store');
        Route::delete('/{id}', 'RepuestoController@delete')->name('delete');
    });

    Route::prefix('/equipos')->name('equipos.')->group(function () {
        Route::get('/get', 'EquipoController@equipos')->name('get');
        Route::get('/cliente/{id}', 'EquipoController@cliente_equipos')->name('cliente');
        Route::put('/update/{id}', 'EquipoController@update')->name('update');
        Route::put('/estado/{id}', 'EquipoController@estado')->name('estado');
        Route::post('/store', 'EquipoController@store')->name('store');
        Route::delete('/{id}', 'EquipoController@delete')->name('delete');
    });

    Route::prefix('/tickets')->name('tickets.')->group(function () {
        Route::get('/get/{id}', 'TicketController@ticket_inicial')->name('inicial.show');
    });

    Route::prefix('/caja')->name('caja.')->group(function () {
      Route::get('/get', 'IngresosRetirosController@caja')->name('get');
      Route::get('/ingresos_y_retiros', 'IngresosRetirosController@ingresos_y_retiros')->name('ingresos_returos');
    });
});
