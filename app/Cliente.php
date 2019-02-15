<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    public function equipos()
    {
        return $this->hasMany(Equipo::class);
    }

    public function tickets_iniciales()
    {
        return $this->hasMany(InicialTicket::Class);
    }

    public function tickets_finales()
    {
        return $this->hasMany(FinalTicket::Class);
    }
}
