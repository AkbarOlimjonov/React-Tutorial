import React from "react";
import "../stylesheets/Post.css";
import PostItem from "./Post";

function PostList({ props }) {
  return (
    <div className="PostList">
      <h1 style={{textAlign: 'center'}}>Barcha maqolalar</h1>
      {props.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
