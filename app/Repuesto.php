<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Repuesto extends Model
{
    public function equipos()
    {
        return $this->belongsToMany(Equipo::Class, 'equipo_repuesto');
    }
}
