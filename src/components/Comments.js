import React, { useState } from 'react'
import { getComments } from '../_helper'
import { ADD_COMMENT, useCommentValue } from './CommentContext'

const Comments = ({ projectId }) => {
  const [commentText, setCommentText] = useState('')
  const [username, setUsername] = useState('')
  const [comments, dispatch] = useCommentValue()

  const handleCreateComment = () => {
    dispatch({
      type: ADD_COMMENT,
      data: {
        username: username,
        commentText: commentText,
        projectId: projectId
      }
    })
    setCommentText('')
    setUsername('')
    console.log(getComments())
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
      <button className='btn btn-secondary' onClick={handleCreateComment}>Create</button>
      <hr />
      {comments[projectId] ? comments[projectId].map((comment, index) => (
        <div key={index}>
          <b>{comment.username}</b> <i className='comment-date'>{comment.date}</i>
          <p>{comment.commentText}</p>
        </div>
      )) : <h4>No comments</h4>}
    </div>
  )
}

export default Comments
