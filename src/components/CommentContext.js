import React, { createContext, useContext, useReducer } from 'react'
import { addComment, getComments } from '../_helper'

export const ADD_COMMENT = 'ADD_COMMENT'

const CommentContext = createContext()

export const CommentContextProvider = ({ children }) => (
  <CommentContext.Provider value={useReducer(reducer, getComments())}>
    {children}
  </CommentContext.Provider>
)

export const useCommentValue = () => useContext(CommentContext)

const reducer = (state, action) => {
  if (action.type === ADD_COMMENT) {
    const { username, commentText, projectId } = action.data
    return {
      ...state,
      [projectId]: [
        ...state[projectId],
        addComment(username, commentText, projectId)
      ]
    }
  }
}
