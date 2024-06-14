<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;

use App\Models\Cinema;

class CinemaController extends Controller
{
    public function show(Request $request)
    {
        $cinema = Cinema::with('theaters.films.showTimes')->find($request->id);
        $cinemaArray = $cinema->toArray();
        $user = Auth::user();
        if (!$cinema) {
            abort(404, 'Cinema not found');
        }
        return Inertia::render('TheaterFilms/TheaterFilms', [
            'auth' => [
                'user' => $user
            ],  
            'cinema' => $cinema,
        ]);
    }

    public function index()
    {
        $cinemas = Cinema::all();
        $laravelVersion = app()->version();
        $phpVersion = phpversion();
        $user = Auth::user();

        return Inertia::render('Welcome', [
            'auth' => [
                'user' => $user
            ],
            'cinemas' => $cinemas
        ]);
    }
}
