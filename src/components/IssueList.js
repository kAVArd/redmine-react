import React, { useState, useEffect } from 'react'
import { getProject, getProjectIssues } from '../_service'
import Issue from './Issue'

const IssueList = (props) => {
  const [id] = useState(props.match.params.id)
  const [project, setProject] = useState(null)
  const [issues, setIssues] = useState([])

  useEffect(() => {
    getProject(id).then(project => setProject(project))
    getProjectIssues(id).then(issues => {
      if (issues.message) setIssues(false)
      else setIssues(issues)
    })
  }, [id])

  if (!issues && project) {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <h3>No issues for <b>{project.name}</b></h3>
        </div>
      </div>
    )
  }

  if (!project || issues.length === 0) {
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
      <h3>Issues of <b>{project.name}</b></h3>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>Tracker</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Subject</th>
            <th>Author</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {console.log(issues)}
          {issues.map(issue => (
            <Issue key={issue.id} issue={issue} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default IssueList
