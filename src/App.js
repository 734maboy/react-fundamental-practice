import React, { useState } from 'react'
import './styles/app.css'
import PostItem from './components/PostItem'
import PostList from './components/PostList'

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


  return (
    <div className="App">
      <PostList posts={posts} title={"Список постов"}/>
    </div>
  );
}

export default App;
