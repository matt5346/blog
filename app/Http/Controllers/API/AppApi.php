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

        foreach($comments as $item) {
            $item->commentReplies = json_decode($item->commentReplies, true);
            Log::emergency(gettype($item->commentReplies));
        }

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
        Log::emergency('storestorestore');
        Log::emergency($request);

        $comment = new Comments();
        $comment->id=$request->id;
        $comment->content=$request->content;
        $comment->author=$request->author;
        $comment->postId=$request->postId;
        $comment->replyStatus=$request->replyStatus;
        $comment->editStatus=$request->editStatus;
        $comment->commentReplies=json_encode($request->commentReplies);
        $comment->save();

        return response()->json([
            'comment' => $comment,
            'message'=> 'Success'
        ], 200);
    }

    public function getCommentById(int $id)
    {
        $comment=Comments::where(['postId'=>$id])->get();

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
        $comment=Comments::findOrFail($id);

        if(isset($request->reply)) {
            $t = json_decode($comment->commentReplies, true);
            $t[] = $request->reply;
            $comment->commentReplies = json_encode($t);
            $comment->save();
        }

        if(isset($request->edit)) {
            $comment->content = array_values($request->edit)[0];
            $comment->author = array_values($request->edit)[1];
            $comment->save();
        }

        return response()->json([
            'comment' => $comment,
            'message'=> 'Success'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $comment=Comments::findOrFail($id);

        $comment::destroy($id);
        return response()->json([
            'message'=> 'Comment Deleted'
        ], 200);
    }
}
