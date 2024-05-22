<?php

namespace App\Filament\Resources\InviteUserResource\Pages;

use App\Filament\Resources\InviteUserResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditInviteUser extends EditRecord
{
    protected static string $resource = InviteUserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
