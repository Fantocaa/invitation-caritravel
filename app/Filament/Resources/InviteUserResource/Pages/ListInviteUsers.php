<?php

namespace App\Filament\Resources\InviteUserResource\Pages;

use App\Filament\Resources\InviteUserResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListInviteUsers extends ListRecords
{
    protected static string $resource = InviteUserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\Action::make('export')
                ->url(url('/api/cahayamercusuar/export')),
            Actions\CreateAction::make(),
        ];
    }
}
