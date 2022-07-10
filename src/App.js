import React, { useRef, useState } from 'react'
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

  const [title, setTitle] = useState("");
  const bodyInputRef = useRef();
  // const [body, setBody] = useState("");



  function addNewPost(e) {
    e.preventDefault();
    console.log(bodyInputRef.current.value);
    // console.log(title, body)
  }

  return (
    <div className="App">
      <form>
        {/*Управляемый компонент*/}
        <SeInput
          type="text"
          placeholder={"Название поста"}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        {/*Неуправляемый компонент*/}
        <SeInput
          ref={bodyInputRef}
          type="text"
          placeholder={"Описание поста"}
        />
        <SeButton onClick={addNewPost}> Создать пост </SeButton>
      </form>
      <PostList posts={posts} title={"Список постов"}/>
    </div>
  );
}

export default App;
