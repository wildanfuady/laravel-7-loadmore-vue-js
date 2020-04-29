<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $users = \App\User::orderBy('name')->simplePaginate((int) $request->get('limit', 10));
        return response()->json($users)->withCallback($request->callback);
    }
}
