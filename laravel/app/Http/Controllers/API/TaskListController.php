<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TaskList;

class TaskListController extends Controller
{
    public function index()
    {
        return TaskList::all(); // すべてのタスクリストを取得して返す
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
