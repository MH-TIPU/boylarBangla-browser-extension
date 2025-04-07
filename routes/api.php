<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\Http;


Route::get('/translate', function (\Illuminate\Http\Request $request) {
    $text = $request->input('text');

    $response = Http::get('https://translate.googleapis.com/translate_a/single', [
        'client' => 'gtx',
        'sl' => 'en',
        'tl' => 'bn',
        'dt' => 't',
        'q' => $text,
    ]);

    $translation = $response->json()[0][0][0] ?? 'Translation failed';

    return response()->json(['translated' => $translation]);
});
