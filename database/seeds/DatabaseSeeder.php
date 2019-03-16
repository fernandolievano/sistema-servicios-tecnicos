<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        // factory(App\Cliente::class, 10)->create();

        DB::table('cajas')->insert([
            'total' => 0
        ]);
    }
}
