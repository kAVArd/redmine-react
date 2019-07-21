import React, { useState, useEffect } from 'react'
import { getProject, getProjectIssues } from '../_service'
import Issue from './Issue'

const IssueList = (props) => {
  const [offset] = useState(props.match.params.offset)
  const [projectId] = useState(props.match.params.id)
  const [project, setProject] = useState(null)
  const [issues, setIssues] = useState([])
  const [totalCount, setTotalCount] = useState(null)

  useEffect(() => {
    getProject(projectId).then(project => setProject(project))
    getProjectIssues(projectId, offset).then(res => {
      if (res.message) setIssues(false)
      else {
        setIssues(res.issues)
        setTotalCount(res.total_count)
      }
    })
  }, [projectId, offset])

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
      <ul className='pagination'>
        <li className={offset === 0 ? 'page-item disabled' : 'page-item'}><a className='page-link' href='#'>Previous</a></li>
        <li className='page-item'><a className='page-link' href={`/project/${projectId}/issues/25`}>1</a></li>
        <li className='page-item'><a className='page-link' href='#'>2</a></li>
        <li className='page-item'><a className='page-link' href='#'>3</a></li>
        <li className='page-item'><a className='page-link' href='#'>Next</a></li>
      </ul>
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
          {issues.map(issue => (
            <Issue key={issue.id} issue={issue} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default IssueList
