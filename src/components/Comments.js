import React, { useState } from 'react'
import { addComment } from '../_helper'

const Comments = () => {
  const [commentText, setCommentText] = useState('')
  const [username, setUsername] = useState('')
  const [comments, setComments] = useState(!localStorage.getItem('comments') ? [] : JSON.parse(localStorage.getItem('comments')))

  const handleCreateComment = () => {
    setComments([
      ...comments,
      addComment(username, commentText)
    ])
    setCommentText('')
    setUsername('')
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
      {comments.map((comment, index) => (
        <div key={index}>
          <b>{comment.username}</b> {comment.date}
          <p>{comment.commentText}</p>
        </div>
      ))}
    </div>
  )
}

export default Comments
