import React, { useState } from 'react'
import './styles/app.css'
import PostItem from './components/PostItem'

function App() {

  return (
    <div className="App">
      <PostItem
        post={{ id: 1, title: 'Javascript', body: 'Description' }}
      />
      <PostItem
        post={{ id: 2, title: 'С#', body: 'Description' }}
      />
      <PostItem
        post={{ id: 3, title: 'Java', body: 'Description' }}
      />
      <PostItem
        post={{ id: 4, title: 'Ruby', body: 'Description' }}
      />
      <PostItem
        post={{ id: 5, title: 'C/C++', body: 'Description' }}
      />
      <PostItem
        post={{ id: 6, title: 'Python', body: 'Description' }}
      />
      <PostItem
        post={{ id: 7, title: 'PHP', body: 'Description' }}
      />
    </div>
  );
}

export default App;
