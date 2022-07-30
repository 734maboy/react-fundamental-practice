import React, { useEffect, useState } from 'react'
import './styles/app.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import SeModal from './components/UI/SeModal/SeModal'
import SeButton from './components/UI/button/SeButton'
import { usePosts } from './hooks/usePosts'
import PostService from './API/PostService'
import Loader from './components/UI/Loader/Loader'
import { useFetching } from './hooks/useFetching'

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: ''});
  const [visible, setVisible] = useState(false);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const data = await PostService.getAll();
    setPosts(data);
  })


  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setVisible(false);
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

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
      {
        postError && <h1> Произошла ошибка ${postError} </h1>
      }
      {isPostLoading
          ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
              <Loader/>
            </div>
          : <PostList remove={removePost} posts={sortedAndSearchPosts} title={"Список постов"}/>

      }

    </div>
  );
}

export default App;
