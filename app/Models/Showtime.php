<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model; // Import Model class
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Showtime extends Model
{
    use HasFactory;

    protected $fillable = ['film_id', 'start_time'];

    public function film()
    {
        return $this->belongsTo(Film::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}