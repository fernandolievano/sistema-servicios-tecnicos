<?php

use Faker\Generator as Faker;

$factory->define(App\Cliente::class, function (Faker $faker) {
    return [
        'nombre' => $faker->name,
        'apellido' => $faker->name,
        'direccion' => $faker->address,
        'telefono' => $faker->phoneNumber,
        'email' => $faker->unique()->safeEmail,
    ];
});
