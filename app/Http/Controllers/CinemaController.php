<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;

use App\Models\Cinema;

class CinemaController extends Controller
{
    public function show(Request $request): Response
    {
        $cinema = Cinema::with('theaters.films.showTimes')->find($request->id);
        dd($cinema);
        return Inertia::render('Welcome', [
            'cinema' => $cinema
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
