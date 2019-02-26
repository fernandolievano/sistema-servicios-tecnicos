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

        return response()->json($cliente);
    }

    public function store(Request $request)
    {
        $cliente = Cliente::create($request->all());

        return response()->json($cliente);
    }

    public function update(Request $request, $id)
    {
        Cliente::findOrFail($id)->update($request->all());

        return response(Response::HTTP_OK);
    }

    public function delete($id)
    {
        $cliente = Cliente::findOrFail($id)->delete();

        return response(Response::HTTP_OK);
    }
}
