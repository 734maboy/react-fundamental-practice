import React, { useMemo, useState } from 'react'
import './styles/app.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import SeSelect from './components/UI/select/SeSelect'
import SeInput from './components/UI/input/SeInput'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Best' },
    { id: 2, title: 'С#', body: 'Worst' },
    { id: 3, title: 'Java', body: 'Aragupega' },
    { id: 4, title: 'Ruby', body: 'Zywooooo' },
    { id: 5, title: 'C/C++', body: 'Malishki' },
    { id: 6, title: 'Python', body: 'FingerPrint' },
    { id: 7, title: 'PHP', body: 'Description' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log("Функция отработана");
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchPosts = useMemo( () => {
    if (searchQuery) {
      return
    }
    return sortedPosts;
  }, [sortedPosts, searchQuery]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(id) {
    console.log(id);
    setPosts(posts.filter(p => p.id !== id));
  }

  function sortPosts(sort) {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0px'}}/>
      <div>
        <SeInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
        />
        <SeSelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={"Сортировка По"}
          options={[
            {value: "title", name: "По названию"},
            {value: "body", name: "По описанию"},
          ]}
        />
      </div>
      {
        sortedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedPosts} title={"Список постов"}/>
        : <h1 style={{textAlign: 'center'}}> Посты не были найдены </h1>
      }

    </div>
  );
}

export default App;
