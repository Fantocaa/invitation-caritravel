<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class InviteUser extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['id_user', 'name', 'status', 'note'];

    protected static function booted()
    {
        static::creating(function ($model) {
            if (empty($model->id_user)) {
                $model->id_user = (string) Str::uuid();
            }
        });
    }

    protected $dates = ['deleted_at'];
}
