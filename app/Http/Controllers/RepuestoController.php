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

        return response(Response::HTTP_OK)->json($repuestos);
    }

    public function repuesto($id)
    {
        $repuesto = Repuesto::findOrFail($id);

        return response(Response::HTTP_OK)->json($repuesto);
    }

    public function store(Request $request)
    {
        Repuesto::create($request->all());

        return response(Response::HTTP_OK);
    }

    public function update(Request $request, $id)
    {
        Repuesto::findOrFail($id)->update($request->all());

        return response(Response::HTTP_OK);
    }

    public function delete($id)
    {
        $repuesto = Repuesto::findOrFail($id);
        $repuesto->delete();

        return response(Response::HTTP_OK);
    }
}
