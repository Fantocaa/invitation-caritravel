<?php

use App\Http\Controllers\ExportController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserData;
use App\Http\Controllers\UserDataCMI;
use Inertia\Inertia;

Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);

    return redirect('/admin');
    // return redirect('/cahayamercusuar/invitation/a3acf059-a4ea-4b46-bb80-815876eec294');
    // return redirect('/caritravel/invitation/4c87a089-f9d9-4dc9-a5c9-bffecc7d0698');
});

// Route::get('/admin/cahayamercusuar/export', [ExportController::class, 'export_cmi'],)->middleware('auth:sanctum');

Route::get('/caritravel/invitation/{uuid}', [UserData::class, 'show'])->name('invitation.show.caritravel');
Route::get('/cahayamercusuar/invitation/{uuid}', [UserDataCMI::class, 'show'])->name('invitation.show.cahayamercusuar');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
