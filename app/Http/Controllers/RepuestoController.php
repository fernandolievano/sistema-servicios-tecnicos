<?php

namespace App\Http\Controllers;

use App\Caja;
use App\Repuesto;
use App\IngresosRetiros;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RepuestoController extends Controller
{
    public function repuestos()
    {
        $repuestos = Repuesto::all();

        return response()->json($repuestos);
    }

    public function repuesto($id)
    {
        $repuesto = Repuesto::findOrFail($id);

        return response(Response::HTTP_OK)->json($repuesto);
    }

    public function store(Request $request)
    {
       $repuesto = Repuesto::create($request->all());

       $repuesto      = $request->get('repuesto') ;
       $precio_compra = $request->get('precio_unitario_compra');
       $stock_inicial = $request->get('cantidad');
       $precio_compra *= $stock_inicial;
       $precio_compra *= -1;

       $caja = Caja::first();
       $caja->total += $precio_compra;
       $caja->save();

       $ingreso_retiro = new IngresosRetiros;
       $ingreso_retiro->descripcion = 'Compra de '.$stock_inicial.' unidades del siguiente repuesto: '.$repuesto;
       $ingreso_retiro->ingreso     = false;
       $ingreso_retiro->cantidad    = $precio_compra;
       $ingreso_retiro->caja_id     = $caja->id;
       $ingreso_retiro->save();

        return response()->json($repuesto);
    }

    public function update(Request $request, $id)
    {
        $repuesto = Repuesto::find($id);
        $repuesto->repuesto                 = $request->get('repuesto');
        $repuesto->descripcion              = $request->get('descripcion');
        $repuesto->precio_unitario_venta    = $request->get('precio_unitario_venta');
        $repuesto->precio_unitario_compra   = $request->get('precio_unitario_compra');
        $repuesto->update();

        return response(Response::HTTP_OK);
    }

    public function delete($id)
    {
        $repuesto = Repuesto::findOrFail($id)->delete();

        return response(Response::HTTP_OK);
    }

    public function stock(Request $request, $id)
    {
      $repuesto = Repuesto::find($id);
      $repuesto->cantidad = $request->get('cantidad');
      $repuesto->update();

      return response(Response::HTTP_OK);
    }
}
