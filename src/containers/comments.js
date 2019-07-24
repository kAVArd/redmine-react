import { ADD_COMMENT } from '../_helper'

const commentsContainer = {
  mapStateToProps: (state) => ({
    comments: state
  }),
  mapDispatchToProps: (dispatch) => ({
    addComment: (data) => dispatch({ type: ADD_COMMENT, data: data })
  })
}

export default commentsContainer
