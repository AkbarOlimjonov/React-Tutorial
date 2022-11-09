import React from "react";
import "../stylesheets/Post.css";
import PostItem from "./Post";

function PostList({ props, remove}) {
  return (
    <div className="PostList">
      <h1 style={{textAlign: 'center'}}>Barcha maqolalar</h1>
      {props.map((post) => (
        <PostItem post={post} remove={remove} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
