import React, { useState, useEffect, Suspense } from 'react'
import { getProject } from '../_service'
import { formatDateTime } from '../_helper'
const IssueList = React.lazy(() => import('./IssueList'))

const ProjectDetails = (props) => {
  const [projectId] = useState(props.match.params.id)
  const [project, setProject] = useState(null)

  useEffect(() => {
    getProject(projectId).then(project => setProject(project))
  }, [projectId])

  if (!project) {
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
      <h3><b>{project.name}</b></h3>
      <hr />
      {console.dir(project)}
      <h6><b>Created:</b> {formatDateTime(project.created_on)}</h6>
      <h6><b>Description:</b> {project.description}</h6>
      <h6><b>Updated:</b> {formatDateTime(project.created_on)}</h6>
      <hr />
      <Suspense fallback={
        <div className='text-center spinners'>
          <div className='spinner-grow text-muted' />
          <div className='spinner-grow text-muted' />
          <div className='spinner-grow text-muted' />
        </div>
      }>
      <IssueList projectId={project.id} projectName={project.name}/>
      </Suspense>
    </div>
  )
}

export default ProjectDetails
