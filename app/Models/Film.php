<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model; // Import Model class
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Film extends Model
{
    use HasFactory;

    protected $fillable = ['film_theater', 'title', 'description', 'duration'];

    public function showtimes()
    {
        return $this->hasMany(Showtime::class);
    }

    public function cinema()
    {
        return $this->belongsTo(Theater::class, 'film_theater');
    }
}