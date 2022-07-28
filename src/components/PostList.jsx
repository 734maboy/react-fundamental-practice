import React from 'react'
import PostItem from './PostItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
			<TransitionGroup>
				{posts.map( (post, index) =>
					<CSSTransition
						key={`${post.id}_${post.title}_${post.body}`}
						timeout={500}
						classNames="post"
					>
						<PostItem remove={remove} post={post} number={index + 1} />
					</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	)
}

export default PostList
