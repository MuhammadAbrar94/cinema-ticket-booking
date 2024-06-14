<?php

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