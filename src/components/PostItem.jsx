import React from 'react'
import SeButton from './UI/button/SeButton'
import { useNavigate } from 'react-router'

const PostItem = (props) => {

  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <SeButton onClick={() => {
          navigate(`/posts/${props.post.id}`)
        }}>
          Открыть
        </SeButton>
        <SeButton onClick={() => props.remove(props.post.id)}> Удалить </SeButton>
      </div>
    </div>
  )
}

export default PostItem
