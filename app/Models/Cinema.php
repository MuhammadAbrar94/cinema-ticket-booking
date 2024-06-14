<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model; // Import Model class
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cinema extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'location'];

    public function theaters()
    {
        return $this->hasMany(Theater::class);
    }
}