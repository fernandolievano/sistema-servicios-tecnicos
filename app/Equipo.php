<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipo extends Model
{
    protected $fillable = [
        'equipo', 'modelo', 'descripcion', 
        'diagnostico', 'estado', 'cliente_id'
    ];

    public function cliente()
    {
        return $this->belongsTo(Cliente::Class);
    }

    public function ticket_inicial()
    {
        return $this->hasOne(InicialTicket::Class);
    }

    public function ticket_final()
    {
        return $this->hasOne(FinalTicket::Class);
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
