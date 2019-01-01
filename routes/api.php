<?php

use Illuminate\Http\Request;

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
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::get("/posts", ["uses" => "PostsController@index"]);
Route::post("/posts", ["uses" => "PostsController@store"]); 
Route::get("/post/{id}", ["uses" => "PostsController@show"]);
Route::put("/post/{id}", ["uses" => "PostsController@update"]);
Route::delete("/post/{id}", ["uses" => "PostsController@delete"]);
