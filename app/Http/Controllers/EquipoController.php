<?php

namespace App\Http\Controllers;

use App\Equipo;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EquipoController extends Controller
{
    public function equipos()
    {
        $equipos = Equipo::all();

        return response()->json($equipos);
    }

    public function store(Request $request)
    {
        Equipo::create($request->all());

        return response(Response::HTTP_CREATED);
    }

    public function update(Request $request, $id)
    {
        $equipo = Equipo::find($id);
        $equipo->update($request->all());

        return reponse($equipo->jsonSerialize(), Response::HTTP_OK);
    }

    public function delete($id)
    {
        $equipo = Equipo::findOrFail($id);
        $equipo->delete();

        return response(Response::HTTP_OK);
    }
}
