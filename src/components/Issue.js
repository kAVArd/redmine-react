import React from 'react'
import { formatDate } from '../_helper'

const Issue = ({ issue }) => {
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.tracker.name}</td>
      <td>{issue.status.name}</td>
      <td>{issue.priority.name}</td>
      <td>{issue.subject}</td>
      <td>{issue.author.name}</td>
      <td>{formatDate(issue.updated_on)}</td>
    </tr>
  )
}

export default Issue
