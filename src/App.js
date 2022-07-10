import React, { useState } from 'react'
import './styles/app.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

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

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title={"Список постов"}/>
    </div>
  );
}

export default App;
