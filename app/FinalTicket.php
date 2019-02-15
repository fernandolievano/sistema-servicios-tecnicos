<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FinalTicket extends Model
{
    public function cliente()
    {
        return $this->belongsTo(Cliente::Class);
    }

    public function equipo()
    {
        return $this->belongsTo(Cliente::Class);
    }
}
