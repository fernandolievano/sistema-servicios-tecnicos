<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Caja extends Model
{
    public function retiros()
    {
        return $this->hasMany(CajaRetiros::class);
    }
}
