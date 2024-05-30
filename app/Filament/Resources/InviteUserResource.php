<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use Filament\Forms\Form;
use App\Models\InviteUser;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\InviteUserResource\Pages;
use App\Filament\Resources\InviteUserResource\RelationManagers;
use App\Http\Controllers\UserData;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\TextColumn;


class InviteUserResource extends Resource
{
    protected static ?string $model = InviteUser::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Cari Travel';
    protected static ?string $modelLabel = 'Invitation User';
    protected static ?string $navigationGroup = 'Invitation Management';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->required()
                    ->label('Nama User'),
                TextInput::make('id_user')
                    ->disabled()
                    ->label('UUID User'),
                Textarea::make('note')
                    ->required()
                    ->label('Catatan')
                    ->rows(8),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')->sortable(),
                TextColumn::make('name')
                    ->label('Nama User')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('link_invitation')
                    ->label('Link Invitation User')
                    // ->getStateUsing(fn ($record) => "https://invitation-caritravel.test/caritravel/invitation/{$record->id_user}")
                    ->getStateUsing(fn ($record) => "https://invitation-caritravel.test/caritravel/invitation/" . substr($record->id_user, 0, 10) . "...")
                    ->copyable()
                    ->copyMessage('Link Copied')
                    ->copyMessageDuration(1500)
                    // ->copyableState(fn ($state): string => $state)
                    ->copyableState(fn ($record): string => "https://invitation-caritravel.test/caritravel/invitation/{$record->id_user}"),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),

            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListInviteUsers::route('/'),
            'create' => Pages\CreateInviteUser::route('/create'),
            'edit' => Pages\EditInviteUser::route('/{record}/edit'),
        ];
    }
}
