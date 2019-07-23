import React, { useState } from 'react'
import { addComment, getProjectComments } from '../_helper'

const Comments = ({ projectId }) => {
  const [commentText, setCommentText] = useState('')
  const [username, setUsername] = useState('')
  const [comments, setComments] = useState(getProjectComments(projectId))
  console.log(localStorage)

  const handleCreateComment = () => {
    setComments([
      ...comments,
      addComment(username, commentText, projectId)
    ])
    setCommentText('')
    setUsername('')
    console.log(localStorage)
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
