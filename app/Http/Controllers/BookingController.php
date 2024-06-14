<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;

use App\Models\Showtime;
use App\Models\Booking;

class BookingController extends Controller
{

    public function index()
    {
        $bookings = Auth::user()->bookings()->with('showtime.film')->get();
        return Inertia::render('Booking/index', [
            'bookings' => $bookings->toArray(),
        ]);
    }

    public function create(Request $request)
    {

        $showtime = Showtime::findOrFail($request->id);
        
        // Check if requested seats are available
        if ($showtime->remaining_seats < $request->seats_booked) {
            return redirect()->back()->with('error', 'Not enough seats available');
        }

        // Update remaining seats count
        $showtime->remaining_seats -= $request->seats_booked;
        $showtime->save();
    
        $bookingReference = Str::uuid();
    
        $booking = Booking::create([
            'user_id' => Auth::id(),
            'showtime_id' => $request->id,
            'seats_booked' => $request->seats_booked,
            'booking_reference' => $bookingReference,
        ]);
    
        return redirect()->route('booking.index')->with('success', 'Booking created successfully');
    }   
}
