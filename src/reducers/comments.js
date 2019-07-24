import { ADD_COMMENT, addComment, getComments } from '../_helper'

const initState = getComments()

const comments = (state = initState, action) => {
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
  return state
}

export default comments
