<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Showtime;
use App\Models\Film;

class ShowtimeSeeder extends Seeder
{
    public function run()
    {
        // Retrieve films
        $films = Film::all();

        // Define fixed showtimes for each film
        foreach ($films as $film) {
            // Adjust timing for each film
            $time = '2024-06-14 ' . $this->generateShowtime($film->id);

            Showtime::create([
                'film_id' => $film->id,
                'start_time' => $time,
            ]);
        }
    }

    // Generate fixed showtimes for each film
    private function generateShowtime($filmId)
    {
        switch ($filmId) {
            case 1:
                return '10:00:00';
            case 2:
                return '13:00:00';
            default:
                return '10:00:00'; // Default time
        }
    }
}
