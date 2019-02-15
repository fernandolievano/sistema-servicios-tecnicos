<?php

namespace App\Http\Controllers;

use App\Cliente;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ClienteController extends Controller
{
    public function clientes()
    {
        $clientes = Cliente::with('equipos')->get();

        return response()->json($clientes);
    }

    public function cliente()
    {
        $cliente = Cliente::where('id', $id)->with('equipos')->get();

        return response(Response::HTTP_OK)->json($cliente);
    }

    public function store(Request $request)
    {
        Cliente::create($request->all());

        return response(Response::HTTP_CREATED);
    }

    public function update(Request $request, $id)
    {
        Cliente::findOrFail($id)->update($request->all());

        return response(Response::HTTP_OK);
    }

    public function delete($id)
    {
        $cliente = Cliente::find($id);
        $cliente->delete();

        return response();
    }
}
