import React from 'react'
import { withRouter } from 'react-router-dom'
import { formatDate } from '../_helper'

const Project = ({ project, history }) => {
  return (
    <tr onClick={() => { history.push(`/project/${project.id}`) }}>
      <td>{project.id}</td>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>{formatDate(project.updated_on)}</td>
    </tr>
  )
}

export default withRouter(Project)
