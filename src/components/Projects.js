import React, { useEffect, useState } from 'react'
import { getProjects } from '../_service'
import Project from './Project'

const Projects = () => {
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
            <th>id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created</th>
            <th>Last update</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => {
            console.log(project)
            return <Project project={project} key={project.id} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Projects
