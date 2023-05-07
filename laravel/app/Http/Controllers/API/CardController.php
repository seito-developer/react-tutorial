<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Card;

class CardController extends Controller
{
    public function index()
    {
        return Card::all(); // すべてのカードを取得して返す
    }
    
    public function store(Request $request)
    {
        $card = new Card();
        $card->title = $request->title;
        $card->list_id = $request->list_id;
        $card->save();

        return response()->json($card);
    }

    public function update(Request $request, Card $card)
    {
        $card->title = $request->title;
        $card->save();

        return response()->json($card);
    }

    public function destroy(Card $card)
    {
        $card->delete();

        return response()->json(['status' => 'success']);
    }
}
