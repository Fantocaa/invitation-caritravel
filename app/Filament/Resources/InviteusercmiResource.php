<?php

namespace App\Filament\Resources;

use App\Filament\Resources\InviteusercmiResource\Pages;
use App\Filament\Resources\InviteusercmiResource\RelationManagers;
use App\Models\Inviteusercmi;
use Filament\Forms;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class InviteusercmiResource extends Resource
{
    protected static ?string $model = Inviteusercmi::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Cahaya Mercusuar';
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
                    // ->getStateUsing(fn ($record) => "https://invitation-caritravel.test/cahayamercusuar/invitation/" . substr($record->id_user, 0, 10) . "...")
                    ->getStateUsing(fn ($record) => "https://invitation.tako.co.id/cahayamercusuar/invitation/" . substr($record->id_user, 0, 10) . "...")
                    ->copyable()
                    ->copyMessage('Link Copied')
                    ->copyMessageDuration(1500)
                    // ->copyableState(fn ($record): string => "https://invitation-caritravel.test/cahayamercusuar/invitation/{$record->id_user}"),
                    ->copyableState(fn ($record): string => "https://invitation.tako.co.id/cahayamercusuar/invitation/{$record->id_user}"),
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
            'index' => Pages\ListInviteusercmis::route('/'),
            'create' => Pages\CreateInviteusercmi::route('/create'),
            'edit' => Pages\EditInviteusercmi::route('/{record}/edit'),
        ];
    }
}
