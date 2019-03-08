<?php

namespace App\Http\Controllers;

use App\Caja;
use App\IngresosRetiros;
use Illuminate\Http\Request;

class IngresosRetirosController extends Controller
{
    public function caja()
    {
      $caja  = Caja::first();

      return response()->json($caja);
    }

    public function ingresos_y_retiros()
    {
      $ingresos_retiros = IngresosRetiros::all();

      return response()->json($ingresos_retiros);
    }

    public function nueva_operacion(Request $request)
    {
      $operacion = IngresosRetiros::create($request->all());

      $caja = Caja::first();
      $caja->total += $request->cantidad;
      $caja->save();

      return response()->json($operacion);
    }
}
