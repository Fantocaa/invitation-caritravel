<?php

namespace App\Exports;

use App\Models\InviteUser;
use Maatwebsite\Excel\Concerns\FromCollection;

class CariTravel implements FromCollection
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return InviteUser::all(['id', 'name', 'status']);
    }

    public function headings(): array
    {
        return [
            'ID',
            'Name',
            // 'Link User',
            'Kehadiran',
        ];
    }
}
