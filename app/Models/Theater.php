<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model; // Import Model class
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Theater extends Model
{
    use HasFactory;

    protected $fillable = ['cinema_id', 'theater_number', 'max_seats'];

    public function cinema()
    {
        return $this->belongsTo(Cinema::class);
    }
    public function films()
    {
        return $this->hasMany(Film::class);
    }
}
