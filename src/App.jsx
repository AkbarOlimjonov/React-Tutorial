import React, { useState } from "react";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/Input"
import MyButton from "./components/UI/button/MyButton"
import { findByLabelText } from "@testing-library/react";


function App() {
  const [post,setPost] = useState([
    {id:1,name:"JavaScript haqida 1",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, esse."},
    {id:2,name:"JavaScript haqida 2",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, esse."},
    {id:3,name:"JavaScript haqida 3",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, esse."}
  ])

  

  return (
    <div className="App">
      <MyInput placeholder="Maqola nomini kiriting"/>
      <MyInput placeholder="Maqolani yozing"/>
      <MyButton >Yaratish</MyButton>
      <PostList props = {post}/>
    </div>
  );
}

export default App;
