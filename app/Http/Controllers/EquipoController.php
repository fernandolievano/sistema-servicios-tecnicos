<?php

namespace App\Http\Controllers;

use App\Equipo;
use App\InicialTicket;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EquipoController extends Controller
{
    public function equipos()
    {
        $equipos = Equipo::with(['ticket_inicial', 'cliente'])->get();

        return response()->json($equipos);
    }

    public function cliente_equipos($id)
    {
        $equipos = Equipo::with('ticket_inicial')->where('cliente_id', $id)->get();

        return response()->json($equipos);
    }

    public function store(Request $request)
    {
        $equipo = Equipo::create($request->all());

        $equipo_id  = $equipo->id;
        $cliente_id = $equipo->cliente_id;

        $ticket = new InicialTicket;
        $ticket->equipo_id  = $equipo_id;
        $ticket->cliente_id = $cliente_id;

        $equipo->ticket_inicial()->save($ticket);

        $id = $ticket->id;

        return response($id);
    }

    public function update(Request $request, $id)
    {
        $equipo = Equipo::find($id);
        $equipo->update($request->all());

        return response($equipo);
    }

    public function estado(Request $request, $id)
    {
      $equipo = Equipo::find($id);
      $equipo->estado = $request->get('estado');
      $equipo->update();

      return response()->json($equipo);
    }

    public function delete($id)
    {
        $equipo = Equipo::findOrFail($id);
        $equipo->delete();

        return response(Response::HTTP_OK);
    }
}
