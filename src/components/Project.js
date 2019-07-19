import React from 'react'

const Project = ({ project }) => {
  return (
    <tr>
      <td>{project.id}</td>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>{new Date(Date.parse(project.created_on)).toDateString()}</td>
      <td>{new Date(Date.parse(project.updated_on)).toDateString()}</td>
    </tr>
  )
}

export default Project
