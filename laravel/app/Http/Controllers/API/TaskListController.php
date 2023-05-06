<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TaskListController extends Controller
{
    public function store(Request $request)
    {
        $tasklist = new BoardList();
        $tasklist->title = $request->title;
        $tasklist->board_id = $request->board_id;
        $tasklist->save();

        return response()->json($tasklist);
    }

    public function update(Request $request, BoardList $tasklist)
    {
        $tasklist->title = $request->title;
        $tasklist->save();

        return response()->json($tasklist);
    }

    public function destroy(BoardList $tasklist)
    {
        $tasklist->delete();

        return response()->json(['status' => 'success']);
    }
}
