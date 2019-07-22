import React from 'react'
import { withRouter } from 'react-router-dom'
import { formatDateTime } from '../_helper'

const Project = ({ project, history }) => {
  return (
    <tr onClick={() => { history.push(`/projects/${project.id}`) }}>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>{formatDateTime(project.updated_on)}</td>
    </tr>
  )
}

export default withRouter(Project)
