import React, { useState } from 'react'
import SeInput from './UI/input/SeInput'
import SeButton from './UI/button/SeButton'

const PostForm = ({ create }) => {

	const [post, setPost] = useState({
		title: "",
		body: "",
	});

	function addNewPost(e) {
		e.preventDefault();

		if (create instanceof Function)  create(post);
		setPost({  title: "", body: "", });
	}

	return (
		<form>
			{/*Управляемый компонент*/}
			<SeInput
				type="text"
				placeholder={"Название поста"}
				value={post.title}
				onChange={e => setPost({...post, title: e.target.value})}
			/>
			<SeInput
				type="text"
				placeholder={"Описание поста"}
				value={post.body}
				onChange={e => setPost({...post, body: e.target.value})}
			/>
			<SeButton onClick={addNewPost}> Создать пост </SeButton>
		</form>
	)
}

export default PostForm
