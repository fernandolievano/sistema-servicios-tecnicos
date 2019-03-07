<?php

namespace App\Http\Controllers;

use App\Caja;
use App\FinalTicket;
use App\InicialTicket;
use App\IngresosRetiros;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function ticket_inicial($id) {
        $ticket_inicial = InicialTicket::where('id', $id)->with(['equipo', 'cliente'])->first();

        return response()->json($ticket_inicial);
    }

    public function store_ticket_final(Request $request)
    {
      $ticket = new FinalTicket;
      $ticket->cliente_id   = $request->get('cliente_id');
      $ticket->equipo_id    = $request->get('equipo_id');
      $ticket->total        = $request->get('total');
      $ticket->save();

      $ticket->with(['equipo', 'cliente']);

      $caja = Caja::first();
      $caja->total += $request->total;
      $caja->save();

      $ingreso = new IngresosRetiros;
      $ingreso->ingreso     = true;
      $ingreso->cantidad    = $request->total;
      $ingreso->descripcion = $request->mensaje;
      $ingreso->caja_id     = $caja->id;
      $ingreso->save();

      return response()->json($ticket);
    }
}
