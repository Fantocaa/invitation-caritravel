<?php

namespace App\Http\Controllers;

use App\Models\InviteUser;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserData extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $inviteUsers = InviteUser::all()->map(function ($inviteUser) {
            return [
                'id' => $inviteUser->id,
                'name' => $inviteUser->name,
                'invitation_link' => $inviteUser->id_user,
            ];
        });

        return Inertia::render('Welcome', [
            'inviteUsers' => $inviteUsers,
        ]);
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
    // public function show(InviteUser $inviteUser)
    public function show($uuid)
    {
        $inviteUser = InviteUser::where('id_user', $uuid)->firstOrFail();
        return Inertia::render('Invitation/Page', [
            'inviteUser' => [
                'id' => $inviteUser->id,
                'name' => $inviteUser->name,
                'invitation_link' => $inviteUser->id_user,
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, InviteUser $inviteUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InviteUser $inviteUser)
    {
        //
    }
}
