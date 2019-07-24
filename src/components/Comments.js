import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_COMMENT } from '../_helper'

const Comments = ({ projectId }) => {
  const [commentText, setCommentText] = useState('')
  const [username, setUsername] = useState('')
  const comments = useSelector(state => state[projectId])
  const dispatch = useDispatch()

  const handleClickCreate = () => {
    dispatch({
      type: ADD_COMMENT,
      data: {
        username: username,
        commentText: commentText,
        projectId: projectId
      }
    })
    setUsername('')
    setCommentText('')
  }

  return (
    <div>
      <h4 className='text-center'><b>Comments</b></h4>
      <div className='form-group'>
        <label htmlFor='username'>Username: </label>
        <input type='text' className='form-control comment-input' value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div className='form-group'>
        <label htmlFor='comment'>Comment:</label>
        <textarea className='form-control comment-input' rows='5' id='comment' value={commentText} onChange={e => setCommentText(e.target.value)} />
      </div>
      <button className='btn btn-secondary' onClick={handleClickCreate}>Create</button>
      <hr />
      {comments ? comments.map((comment, index) => (
        <div key={index}>
          <b>{comment.username}</b> <i className='comment-date'>{comment.date}</i>
          <p>{comment.commentText}</p>
        </div>
      )) : <h4>No comments</h4>}
    </div>
  )
}

export default Comments
