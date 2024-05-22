<?php
namespace App\Filament\Resources\InviteUserResource\Api;

use Rupadana\ApiService\ApiService;
use App\Filament\Resources\InviteUserResource;
use Illuminate\Routing\Router;


class InviteUserApiService extends ApiService
{
    protected static string | null $resource = InviteUserResource::class;

    public static function handlers() : array
    {
        return [
            Handlers\CreateHandler::class,
            Handlers\UpdateHandler::class,
            Handlers\DeleteHandler::class,
            Handlers\PaginationHandler::class,
            Handlers\DetailHandler::class
        ];

    }
}
