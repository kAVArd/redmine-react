import React from 'react'

const Issue = ({ issue }) => {
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.project.name}</td>
      <td>{issue.status.name}</td>
      <td>{issue.priority.name}</td>
      <td>{issue.subject}</td>
      <td>{issue.author.name}</td>
      <td>{new Date(Date.parse(issue.updated_on)).toDateString()}</td>
    </tr>
  )
}

export default Issue
