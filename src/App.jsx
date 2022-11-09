import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [post, setPost] = useState([
    {
      id: 1,
      name: "JavaScript haqida 1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, esse.",
    },
    {
      id: 2,
      name: "JavaScript haqida 2",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, esse.",
    },
    {
      id: 3,
      name: "JavaScript haqida 3",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, esse.",
    },
  ]);

  const createPost = (newPost) => {
    setPost([...post, newPost]);
  };

  const removePost = (prop) => {
    setPost(post.filter(p => p.id !== prop.id))
  };

  return (
    <div className="App">
      <PostForm create={createPost} />

      <hr style={{margin: '15px 0px'}} />
      <MySelect defaultValue={"Filtrlash"} options={{name:"Nomi bo'yicha",value:'name'}}></MySelect>

      {post.length !== 0
        ?
        <PostList remove={removePost} props={post}  />
        :
        <h1 style={{textAlign:'center'}}>Maqola topilmadi</h1>
      }
      
    </div>
  );
}

export default App;
