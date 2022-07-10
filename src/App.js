import React, { useState } from 'react'
import './styles/app.css'
import PostList from './components/PostList'
import SeButton from './components/UI/button/SeButton'
import SeInput from './components/UI/input/SeInput'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'С#', body: 'Description' },
    { id: 3, title: 'Java', body: 'Description' },
    { id: 4, title: 'Ruby', body: 'Description' },
    { id: 5, title: 'C/C++', body: 'Description' },
    { id: 6, title: 'Python', body: 'Description' },
    { id: 7, title: 'PHP', body: 'Description' },

  ]);

  const [post, setPost] = useState({
    title: "",
    body: "",
  });



  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };

    setPosts([...posts, newPost]);
    setPost({  title: "", body: "", });
  }

  return (
    <div className="App">
      <form>
        {/*Управляемый компонент*/}
        <SeInput
          type="text"
          placeholder={"Название поста"}
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <SeInput
          type="text"
          placeholder={"Описание поста"}
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
        />
        <SeButton onClick={addNewPost}> Создать пост </SeButton>
      </form>
      <PostList posts={posts} title={"Список постов"}/>
    </div>
  );
}

export default App;
