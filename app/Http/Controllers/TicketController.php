<?php

namespace App\Http\Controllers;

use App\InicialTicket;
use App\FinalTicket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function ticket_inicial($id) {
        $ticket_inicial = InicialTicket::where('id', $id)->with(['equipo', 'cliente'])->first();

        return response()->json($ticket_inicial);
    }
}
