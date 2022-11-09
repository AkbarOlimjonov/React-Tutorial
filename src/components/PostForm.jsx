import React from "react";
import { useState } from "react";
import "../stylesheets/Post.css";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/Input";

function PostForm({ create }) {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');


  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      name: title,
      desc: body,
    }

    create(newPost)
  }
  return (
    <div>
      <MyInput
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Maqola nomini kiriting"
      />
      <MyInput
        onChange={(e) => setBody(e.target.value)}
        value={body}
        placeholder="Maqolani yozing"
      />
      <MyButton onClick={addNewPost}>Yaratish</MyButton>
    </div>
  );
}

export default PostForm;
