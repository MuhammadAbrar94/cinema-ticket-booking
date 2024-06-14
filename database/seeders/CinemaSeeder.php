<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CinemaSeeder extends Seeder
{
    public function run()
    {
        // Insert cinemas with location
        DB::table('cinemas')->insert([
            ['name' => 'Cinema 1', 'location' => 'Location 1'],
            ['name' => 'Cinema 2', 'location' => 'Location 2'],
        ]);

        // Get cinema IDs
        $cinema1Id = DB::table('cinemas')->where('name', 'Cinema 1')->value('id');
        $cinema2Id = DB::table('cinemas')->where('name', 'Cinema 2')->value('id');

        // Insert theaters for Cinema 1
        DB::table('theaters')->insert([
            ['cinema_id' => $cinema1Id, 'theater_number' => 1],
            ['cinema_id' => $cinema1Id, 'theater_number' => 2],
        ]);

        // Insert theaters for Cinema 2
        DB::table('theaters')->insert([
            ['cinema_id' => $cinema2Id, 'theater_number' => 1],
            ['cinema_id' => $cinema2Id, 'theater_number' => 2],
        ]);
    }
}
