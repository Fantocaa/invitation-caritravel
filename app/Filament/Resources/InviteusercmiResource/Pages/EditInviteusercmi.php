<?php

namespace App\Filament\Resources\InviteusercmiResource\Pages;

use App\Filament\Resources\InviteusercmiResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditInviteusercmi extends EditRecord
{
    protected static string $resource = InviteusercmiResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
