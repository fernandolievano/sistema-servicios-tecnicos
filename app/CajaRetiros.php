<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CajaRetiros extends Model
{
    public function caja()
    {
        return $this->belongsTo(Caja::class);
    }
}
