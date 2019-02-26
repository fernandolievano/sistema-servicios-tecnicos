<?php

use Faker\Generator as Faker;

$factory->define(App\Cliente::class, function (Faker $faker) {
    return [
        'nombre' => $faker->word,
        'apellido' => $faker->word,
        'direccion' => $faker->address,
        'telefono' => $faker->phoneNumber,
        'email' => $faker->unique()->safeEmail,
    ];
});
