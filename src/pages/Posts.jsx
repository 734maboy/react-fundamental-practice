import React, { useEffect, useRef, useState } from 'react'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import { getPagesCount } from '../utils/Pagination'
import { usePosts } from '../hooks/usePosts'
import SeButton from '../components/UI/button/SeButton'
import SeModal from '../components/UI/SeModal/SeModal'
import PostFilter from '../components/PostFilter'
import Pagination from '../components/UI/Pagination/Pagination'
import Loader from '../components/UI/Loader/Loader'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'

function Posts() {
	const [posts, setPosts] = useState([]);

	const [filter, setFilter] = useState({ sort: '', query: ''});
	const [visible, setVisible] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const lastElement = useRef();
	const observer = useRef();

	const changePage = (pageNumber) => {
		setPage(pageNumber);
	}

	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts([...posts, ...response.data]);
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPagesCount(totalCount, limit));
	})


	function createPost(newPost) {
		setPosts([...posts, newPost]);
		setVisible(false);
	}

	useEffect( () => {
		if (isPostLoading) return;
		if (observer.current) observer.current.disconnect();
		var callback = function(entries, observer) {
			if (entries[0].isIntersecting && page < totalPages) {
				console.log(page);
				setPage(page + 1);
			}
		};

		observer.current = new IntersectionObserver(callback);
		observer.current.observe(lastElement.current);
	}, [isPostLoading]);

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page]);

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
			<Pagination
				totalPages={totalPages}
				currentPage={page}
				changePageCallback={changePage}
			/>
			{isPostLoading &&
				<div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
					<Loader/>
				</div>
			}
			<PostList remove={removePost} posts={sortedAndSearchPosts} title={"Список постов"}/>
			<div ref={lastElement} style={{ height: '20px', background: 'red'}}/>

		</div>
	);
}

export default Posts;
