<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Board;

class BoardController extends Controller
{
    public function index()
    {
        return Board::where('user_id', Auth::id())->get();
    }

    public function store(Request $request)
    {
        $board = new Board($request->all());
        // $board->user_id = Auth::id();
        $board->save();
        return response()->json($board, 201);
    }

    public function show(Board $board)
    {
        return $board;
    }

    public function update(Request $request, Board $board)
    {
        $board->update($request->all());
        return response()->json($board, 200);
    }

    public function destroy(Board $board)
    {
        $board->delete();
        return response()->json(null, 204);
    }
}
