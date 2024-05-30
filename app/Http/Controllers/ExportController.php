<?php

namespace App\Http\Controllers;

use App\Exports\CahayaMercusuar;
use App\Exports\CariTravel;
use App\Models\InviteUserCMI;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function export_cmi()
    {
        return Excel::download(new CahayaMercusuar, 'Invitation Users CMI.xlsx');
    }

    public function export_caritravel()
    {
        return Excel::download(new CariTravel, 'Invitation Users CariTravel.xlsx');
    }

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(InviteUserCMI $inviteUserCMI)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InviteUserCMI $inviteUserCMI)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, InviteUserCMI $inviteUserCMI)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InviteUserCMI $inviteUserCMI)
    {
        //
    }
}
