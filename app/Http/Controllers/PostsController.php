<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post; // Post Model

class PostsController extends Controller
{
    //get all the posts inside the database
    public function index (){
        $posts = Post::all();
        return response()->json([
            "message" => "Success",
            "data" => $posts
        ], 200);
    }

    //create a new post
    public function store(Request $request) {
        $this->validate(
            $request, [
                "title" => "required",
                "content" => "required"
            ]
        );
        
        $newPost = new Post();
        $newPost->title = $request->input("title");
        $newPost->content = $request->input("content");

        //check if the post was saved
        if($newPost->save()){
            return response()->json([
                "message" => "Success", 
                "newPost" => $newPost
            ], 201); 

        }else{
            return response()->json([
                "message" => "Bad Request", 
                
            ], 500);
        }
    
    }

    public function show($id){
      
        $post = Post::find($id);
        //check if the post exists
        if(!$post){
            return response()->json([
                "message" => "Post not found in the database"
            ], 404);
        }else{
            return response()->json([
                "post" => $post
            ], 200);
        }    
    
    }


    public function update(Request $request){
       
        $editedPost = Post::find($request->input("id"));
        $editedPost->title = $request->input("title");
        $editedPost->content = $request->input("content");

        if($editedPost->save()){
            return response()->json([
                "message" => "Post Edited", 
                "newPost" => $editedPost
            ], 201); 

        }else{
            return response()->json([
                "message" => "Bad Request", 
                
            ], 500);
        }
   
    }

    public function delete(Request $request, $id){
        $postToDelete = Post::find($id);
        if($postToDelete->delete()){
            return response()->json([
                "message" => "Post Deleted", 
                "postID" => $postToDelete
            ], 200);
        }else{
            return response()->json([
                "message" => "Internal Error, post was not deleted", 
                "postID" => $postToDelete
            ], 500);
        }
        
    }
}
