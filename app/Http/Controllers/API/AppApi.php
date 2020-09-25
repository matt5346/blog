<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Comments;
use Illuminate\Support\Facades\Log;

class AppApi extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments = Comments::all();
        return $comments;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
//        $comments = Comments::create($request->all());
//        $comments = Comments::create([
//            'id'=> $request -> id,
//            'content'=> $request('content'),
//            'author'=> $request('author'),
//            'likes'=> $request('likes'),
//            'dislikes'=> $request('dislikes'),
//            'postId'=> $request('postId')
//        ]);
        Log::emergency('zzzzzzzz');
        Log::emergency($request);
        Log::emergency('zzzzzzzz');

        $comment = new Comments();
        $comment->id = $request -> id;
        $comment->content = $request -> content;
        $comment->author = $request -> author;
        $comment->postId = $request -> postId;
        $comment->replyStatus = $request -> replyStatus;
        $comment->commentReplies = $request-> commentReplies;
        $comment->save();

        return response()->json([
            'comment' => $comment,
            'message'=> 'Success'
        ], 200);
    }

    public function getCommentById(int $id)
    {
        $comment = Comments::where(['postId' => $id])->get();
        return $comment;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
