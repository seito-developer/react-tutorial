<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Board;
use Illuminate\Http\Request;
use App\Models\TaskList;

class TaskListController extends Controller
{
    public function index($boardId)
    {
        $board = Board::findOrFail($boardId);

        // Retrieve the related task lists
        $tasklists = $board->tasklists;

        return $tasklists;
    }

    public function store(Request $request)
    {
        $tasklist = new TaskList();
        $tasklist->title = $request->title;
        $tasklist->board_id = $request->board_id;
        $tasklist->save();

        return response()->json($tasklist);
    }

    public function update(Request $request, TaskList $tasklist)
    {
        $tasklist->title = $request->title;
        $tasklist->save();

        return response()->json($tasklist);
    }

    public function destroy(TaskList $tasklist)
    {
        $tasklist->delete();

        return response()->json(['status' => 'success']);
    }
}
