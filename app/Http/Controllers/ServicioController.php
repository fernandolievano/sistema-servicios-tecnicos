<?php

namespace App\Http\Controllers;

use App\Servicio;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ServicioController extends Controller
{
    public function servicios()
    {
        $servicios = Servicio::all();

        return response()->json($servicios);
    }

    public function servicio($id)
    {
        $servicio = Servicio::findOrFail($id);

        return response()->json($servicio);
    }

    public function store(Request $request)
    {
        Servicio::create($request->all());

        return response(Response::HTTP_CREATED);
    }

    public function update(Request $request, $id)
    {
        Servicio::findOrFail($id)->update($request->all());

        return response(Response::HTTP_OK);
    }

    public function delete($id)
    {
        $servicio = Servicio::findOrFail($id);
        $servicio->delete();

        return response(Response::HTTP_OK);
    }
}
