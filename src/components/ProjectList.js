import React, { useEffect, useState } from 'react'
import { getProjects } from '../_service'
import Project from './Project'

const ProjectList = () => {
  const [projects, setProjects] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    getProjects().then(projects => {
      setProjects(projects)
      setIsFetching(false)
    })
  }, [])

  if (isFetching) {
    return (
      <div className='text-center spinners'>
        <div className='spinner-grow text-muted' />
        <div className='spinner-grow text-muted' />
        <div className='spinner-grow text-muted' />
      </div>
    )
  }

  return (
    <div className='container'>
      <h3>Projects</h3>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Last update</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) =>
            <Project project={project} key={project.id} />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectList
