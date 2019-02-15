<?php

Route::get('/{any}', 'Controller@index')->where('any', '.*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
