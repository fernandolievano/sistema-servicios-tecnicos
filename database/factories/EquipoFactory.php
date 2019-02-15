<?php

use Faker\Generator as Faker;

$factory->define(App\Equipo::class, function (Faker $faker) {
    return [
        'equipo' => $faker->word,
        'modelo' => $faker->word,
        'descripcion' => $faker->sentence,
        'diagnostico' => $faker->sentence,
        'estado' => $faker->word,
        'cliente_id' => $faker->randomDigit
    ];
});
