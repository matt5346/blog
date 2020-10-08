<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('comments', 'API\AppApi@store');
Route::get('comments/{id}', 'API\AppApi@getCommentById');
Route::put('comments/{id}', 'API\AppApi@update');
Route::delete('comments/{id}', 'API\AppApi@destroy');

Route::apiResource('comments', 'API\AppApi');

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
