<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            CinemaSeeder::class,
            FilmSeeder::class,
            ShowtimeSeeder::class,
        ]);
    }
}
