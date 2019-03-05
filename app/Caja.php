<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Caja extends Model
{
    protected $fillable = ['total'];

    public function ingresos_retiros()
    {
      return $this->hasMany(IngresosRetiros::class);
    }
}
