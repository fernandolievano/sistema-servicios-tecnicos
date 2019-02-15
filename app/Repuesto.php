<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Repuesto extends Model
{
    protected $fillable = [
        'repuesto', 'descripcion', 'cantidad', 'precio_unitario'
    ];

    public function equipos()
    {
        return $this->belongsToMany(Equipo::Class, 'equipo_repuesto');
    }
}
