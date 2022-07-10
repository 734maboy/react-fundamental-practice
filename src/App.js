import React, { useMemo, useState } from 'react'
import './styles/app.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import SeModal from './components/UI/SeModal/SeModal'
import SeButton from './components/UI/button/SeButton'

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

  const [filter, setFilter] = useState({ sort: '', query: ''});
  const [visible, setVisible] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo( () => {
    if (filter.query) {
      return sortedPosts.filter( post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
    }
    return sortedPosts;
  }, [filter.query, sortedPosts ]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setVisible(false);
  }

  function removePost(id) {
    setPosts(posts.filter(p => p.id !== id));
  }

  return (
    <div className="App">
      <SeButton
        style={{marginTop: '25px'}}
        onClick={() => setVisible(true)}
      >
        Создать пост
      </SeButton>
      <SeModal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost}/>
      </SeModal>
      <hr style={{margin: '15px 0px'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchPosts} title={"Список постов"}/>
    </div>
  );
}

export default App;
