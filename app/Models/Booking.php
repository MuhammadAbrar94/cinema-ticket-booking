<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model; // Import Model class
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'showtime_id', 'seats_booked', 'booking_reference'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function showtime()
    {
        return $this->belongsTo(Showtime::class);
    }
}