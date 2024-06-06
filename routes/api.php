<?php

use App\Http\Controllers\ExportController;
use App\Http\Controllers\UserData;
use App\Http\Controllers\UserDataCMI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/cahayamercusuar/export', [ExportController::class, 'export_cmi']);
Route::get('/cahayamercusuar/export', [ExportController::class, 'export_caritravel']);

// Route::get('/user_data', [UserData::class, 'index']);

Route::post('/caritravel/invitation/{uuid}/status', [UserData::class, 'status'])->name('invitation.status.caritravel');
Route::post('/cahayamercusuar/invitation/{uuid}/status', [UserDataCMI::class, 'status'])->name('invitation.status.cahayamercusuar');

Route::post('/caritravel/invitation/status', [UserData::class, 'status_confirmation'])->name('invitation.status_confirmation.caritravel');
Route::post('/cahayamercusuar/invitation/status', [UserDataCMI::class, 'status_confirmation'])->name('invitation.status_confirmation.cahayamercusuar');


// Route::post('/cahayamercusuar/invitation/{uuid}/confirmation', [UserDataCMI::class, 'status_confirmation'])->name('invitation.status_confirmation.cahayamercusuar');
// Route::get('/cahayamercusuar/invitation/{uuid}/confirmation', [UserDataCMI::class, 'status_confirmation'])->name('invitation.status_confirmation.cahayamercusuar');
