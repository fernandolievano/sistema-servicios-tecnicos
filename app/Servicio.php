<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servicio extends Model
{
    protected $fillable = ['titulo', 'descripcion', 'valor'];

    public function equipos()
    {
        return $this->belongsToMany(Equipo::Class, 'equipo_servicio');
    }
}
