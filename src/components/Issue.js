import React from 'react'
import { formatDateTime } from '../_helper'
import { withRouter } from 'react-router-dom'

const Issue = ({ issue, history }) => {
  return (
    <tr onClick={() => history.push(`/issues/${issue.id}`)}>
      <td>{issue.id}</td>
      <td>{issue.tracker.name}</td>
      <td>{issue.status.name}</td>
      <td>{issue.priority.name}</td>
      <td>{issue.subject}</td>
      <td>{issue.author.name}</td>
      <td>{formatDateTime(issue.updated_on)}</td>
    </tr>
  )
}

export default withRouter(Issue)
