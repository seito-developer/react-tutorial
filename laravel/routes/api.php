<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/hoge', function (Request $request) {
    return response()->json(
        [
            'hoge' => 'Hello from Laravel'
        ]
    );
});

Route::apiResource('/boards', BoardController::class);
Route::apiResource('/cards', CardController::class);

Route::post('/tasklists', [TaskListController::class, 'store']);
Route::put('/tasklists/{tasklist}', [TaskListController::class, 'update']);
Route::delete('/tasklists/{tasklist}', [TaskListController::class, 'destroy']);

Route::post('/cards', [CardController::class, 'store']);
Route::put('/cards/{card}', [CardController::class, 'update']);
Route::delete('/cards/{card}', [CardController::class, 'destroy']);