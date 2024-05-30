<?php

namespace App\Filament\Resources\InviteusercmiResource\Pages;

use App\Filament\Resources\InviteusercmiResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListInviteusercmis extends ListRecords
{
    protected static string $resource = InviteusercmiResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\Action::make('export')
                ->url(url('/api/cahayamercusuar/export')),
            Actions\CreateAction::make(),
        ];
    }
}
