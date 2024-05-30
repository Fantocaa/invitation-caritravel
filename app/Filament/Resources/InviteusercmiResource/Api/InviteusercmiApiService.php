<?php
namespace App\Filament\Resources\InviteusercmiResource\Api;

use Rupadana\ApiService\ApiService;
use App\Filament\Resources\InviteusercmiResource;
use Illuminate\Routing\Router;


class InviteusercmiApiService extends ApiService
{
    protected static string | null $resource = InviteusercmiResource::class;

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
