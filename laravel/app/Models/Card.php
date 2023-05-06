<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    protected $fillable = ['list_id', 'title', 'description', 'position', 'due_date'];

    public function taskList()
    {
        return $this->belongsTo(TaskList::class, 'list_id');
    }
}