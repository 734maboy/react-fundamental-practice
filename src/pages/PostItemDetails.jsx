import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'

const PostItemDetails = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});
	const [postComments, setPostComments] = useState([]);

	const [fetchPostById, isLoading, error] = useFetching(async () => {
		const post = await PostService.getById(id);
		setPost(post);
	});

	const [fetchPostComments, isLoadingComments, commentsError] = useFetching(async () => {
		const comments = await PostService.getPostComments(id);
		setPostComments(comments);
	});

	useEffect(() => {
		fetchPostById();
		fetchPostComments();
	}, []);

	return (
		<div>
			<h1> There`s the post with Id ({id}) </h1>
			{
				isLoading ? <Loader/> :
					<div>
						<h2> Title {post?.title} </h2>
						<span> {post?.body} </span>
					</div>
			}
			<hr/>
			<h1> Комментарии </h1>
			<div>
				{
					postComments.map(comment => {
						return (
							<div
								style={{
									padding: '20px 5px'
								}}
								key={`key-comment_${comment.id}`}>

								<h4> {comment.email}  </h4>
								<span> {comment.body} </span>

							</div>
						);
					})
				}
			</div>
		</div>
	)
}

export default PostItemDetails
