<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Film;
use App\Models\Theater;

class FilmSeeder extends Seeder
{
    public function run()
    {
        // Get all theaters
        $theaters = Theater::all();

        // Create two films for each theater
        foreach ($theaters as $theater) {
            // Create Film 1
            $film1 = Film::create([
                'title' => 'Film 1 for Theater ' . $theater->id,
                'description' => 'Description of Film 1 for Theater ' . $theater->id,
                'duration' => 120, // Example duration in minutes
                'theater_id' => $theater->id,
            ]);

            // Create Film 2
            $film2 = Film::create([
                'title' => 'Film 2 for Theater ' . $theater->id,
                'description' => 'Description of Film 2 for Theater ' . $theater->id,
                'duration' => 90, // Example duration in minutes
                'theater_id' => $theater->id,
            ]);
        }
    }
}
