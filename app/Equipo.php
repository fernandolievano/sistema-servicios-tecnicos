<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipo extends Model
{
    public function cliente()
    {
        return $this->belongsTo(Cliente::Class);
    }

    public function tickets_iniciales()
    {
        return $this->hasMany(InicialTicket::Class);
    }

    public function tickets_finales()
    {
        return $this->hasMany(FinalTicket::Class);
    }

    public function servicios()
    {
        return $this->belongsToMany(Servicio::Class, 'equipo_servicio');
    }

    public function repuestos()
    {
        return $this->belongsToMany(Repuesto::Class, 'equipo_repuesto');
    }
}
