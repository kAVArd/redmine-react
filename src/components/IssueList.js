import React, { useState, useEffect } from 'react'
import { getProject } from '../_service'

const IssueList = (props) => {
  const [id] = useState(props.match.params.id)
  const [project, setProject] = useState(null)

  useEffect(() => {
    getProject(id).then(project => setProject(project))
  }, [id])

  if (project === null) {
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
      <h3>Issues of {project.name}</h3>
    </div>
  )
}

export default IssueList
