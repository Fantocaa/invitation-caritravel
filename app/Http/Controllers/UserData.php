<?php

namespace App\Http\Controllers;

use App\Models\InviteUser;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Pest\Laravel\json;

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
        return Inertia::render('Invitation/Cari Travel/Page', [
            'inviteUser' => [
                'id' => $inviteUser->id,
                'name' => $inviteUser->name,
                'invitation_link' => $inviteUser->id_user,
            ],
        ]);
    }

    public function status(Request $request, $uuid)
    {
        // Memeriksa nilai dari 'status' yang dikirimkan dalam permintaan
        $status = $request->input('status');

        // dd($status);

        // Validasi permintaan
        $request->validate([
            'status' => 'required|in:Hadir,Tidak Hadir', // Pastikan status yang diterima adalah 'Hadir' atau 'Tidak Hadir'
        ]);

        // Cari user berdasarkan UUID
        $user = InviteUser::where('id_user', $uuid)->first();

        // Jika user tidak ditemukan, kembalikan respons dengan status 404 Not Found
        if (!$user) {
            return response()->json(['error' => 'User not found.'], 404);
        }

        // Update status user
        $user->status = $status;
        $user->save();

        // Kembalikan respons dengan status 200 OK
        return response()->json(['message' => 'Status updated successfully.'], 200);
    }

    public function status_confirmation(Request $request)
    {
        // dd($request)->all();
        // Validate the request
        $request->validate([
            'name' => 'required|string|max:255',
            'guest_count' => 'required|string',
            'status' => 'required|string|in:Hadir,Tidak Hadir',
        ]);

        // Create or update the InviteUser record
        $inviteUser = InviteUser::updateOrCreate(
            ['name' => $request->name],
            ['status' => $request->status, 'guest_count' => $request->guest_count]
        );

        // Return the response
        return response()->json(['message' => 'Attendance confirmed', 'data' => $inviteUser]);
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
