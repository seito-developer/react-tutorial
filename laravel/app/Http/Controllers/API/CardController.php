<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CardController extends Controller
{
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
