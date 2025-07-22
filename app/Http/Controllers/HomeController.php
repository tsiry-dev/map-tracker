<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return inertia('Home', [
            'title' => 'Home Page',
            'description' => 'Welcome to the home page of M-Tracker.',
        ]);
    }
}
