<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    protected $fillable = [
        'author',
        'content',
        'postId',
        'replyStatus',
        'commentReplies',
        'created_by_user_id',
        'updated_by_user_id'
    ];
}
