<?php

namespace App\Http\Controllers;

use App\Repuesto;
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

        return response()->json($repuesto);
    }

    public function update(Request $request, $id)
    {
        $repuesto = Repuesto::find($id);
        $repuesto->repuesto         = $request->get('repuesto');
        $repuesto->descripcion      = $request->get('descripcion');
        $repuesto->cantidad         = $request->get('cantidad');
        $repuesto->precio_unitario  = $request->get('precio_unitario');
        $repuesto->update();

        return response(Response::HTTP_OK);
    }

    public function delete($id)
    {
        $repuesto = Repuesto::findOrFail($id)->delete();

        return response(Response::HTTP_OK);
    }
}
