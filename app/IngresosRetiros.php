<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IngresosRetiros extends Model
{
    protected $fillable = ['cantidad', 'ingreso'];

    public function caja()
    {
      return $this->belongsTo(Caja::class);
    }
}
