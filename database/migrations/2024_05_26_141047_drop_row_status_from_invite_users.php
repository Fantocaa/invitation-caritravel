<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Tambahkan kolom baru dengan nilai null
        Schema::table('invite_users', function (Blueprint $table) {
            $table->string('status_user')->nullable();
        });

        // Salin data dari kolom lama ke kolom baru
        DB::table('invite_users')->update(['status_user' => DB::raw('status')]);

        // Hapus kolom lama
        Schema::table('invite_users', function (Blueprint $table) {
            $table->dropColumn('status');
        });

        // Ubah nama kolom baru menjadi nama kolom lama
        Schema::table('invite_users', function (Blueprint $table) {
            $table->renameColumn('status_user', 'status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Tambahkan kolom lama dengan nilai default
        Schema::table('invite_users', function (Blueprint $table) {
            $table->string('status')->default('default_value');
        });

        // Salin data dari kolom baru ke kolom lama
        DB::table('invite_users')->update(['status' => DB::raw('status_user')]);

        // Hapus kolom baru
        Schema::table('invite_users', function (Blueprint $table) {
            $table->dropColumn('status_user');
        });
    }
};
