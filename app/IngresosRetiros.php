<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IngresosRetiros extends Model
{
    protected $fillable = ['cantidad', 'ingreso', 'descripcion', 'caja_id'];

    public function caja()
    {
      return $this->belongsTo(Caja::class);
    }
}
