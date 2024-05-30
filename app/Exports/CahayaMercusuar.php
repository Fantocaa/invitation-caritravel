<?php

namespace App\Exports;

use App\Models\InviteUserCMI;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class CahayaMercusuar implements FromCollection, WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return InviteUserCMI::all(['id', 'name', 'status']);

        // ->map(function ($item) {
        // $item->id_user = "https://invitation-caritravel.test/cahayamercusuar/invitation/{$item->id_user}";
        // return $item;
        // });
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
