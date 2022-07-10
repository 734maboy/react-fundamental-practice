import React from 'react'
import PostItem from './PostItem'

const PostList = ({ remove, posts, title }) => {

	if (!posts.length) {
		return (
			<h1 style={{textAlign: 'center'}}>
				Посты не были найдены
			</h1>
		)
	}

	return (
		<div>
			<h1 style={{
				textAlign: 'center',
			}}> {title} </h1>
			{posts.map( (post, index) =>
				<PostItem remove={remove} post={post} number={index + 1} key={`${post.id}_${post.title}_${post.body}`}/>
			)}
		</div>
	)
}

export default PostList
