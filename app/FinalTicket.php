<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FinalTicket extends Model
{
    protected $fillable = ['cliente_id', 'equipo_id', 'total'];

    public function cliente()
    {
        return $this->belongsTo(Cliente::Class);
    }

    public function equipo()
    {
        return $this->belongsTo(Cliente::Class);
    }
}
