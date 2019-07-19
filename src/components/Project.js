import React from 'react'
import { withRouter } from 'react-router-dom'

const Project = ({ project, history }) => {
  const goToIssues = () => {
    history.push(`/project/${project.id}/issues`)
  }

  return (
    <tr onClick={goToIssues}>
      <td>{project.id}</td>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>{new Date(Date.parse(project.created_on)).toDateString()}</td>
      <td>{new Date(Date.parse(project.updated_on)).toDateString()}</td>
    </tr>
  )
}

export default withRouter(Project)
