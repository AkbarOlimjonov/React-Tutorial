import React from "react";
import "../stylesheets/Post.css";
import MyButton from "./UI/button/MyButton";

function Post(props) {
  const {id,name,desc} = props.post;
  return (
    <div  className="PostItems">
      <div className="post">
        <h1>{name}</h1>
        <div className="post-text">
          <div className="post-p">
            <p>{desc}</p>
          </div>
          <div className="post_btn">
            <MyButton disabled>O'chirish</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
