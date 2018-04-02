<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/projects', function () use ($router) {
    return $results = DB::select("SELECT name_id, name, tags, type, external_url, tools, description, date
                                  FROM public_projects
                                  ORDER BY date DESC, id DESC");
});

$router->get('/projects/{name_id}', function () use ($router) {
    return $results = DB::select("SELECT *
                                  FROM public_projects
                                  WHERE name_id = {name_id}");
});

$router->get('/highlights', function () use ($router) {
    return $results = DB::select("SELECT date, type, title, info
                                  FROM public_highlights
                                  ORDER BY date DESC, id DESC");
});

$router->get('/social', function () use ($router) {
    return $results = DB::select("SELECT github, twitter, linkedin, email
                                  FROM public_social
                                  WHERE id = 1");
});
