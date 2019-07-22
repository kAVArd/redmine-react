import React, { useState, useEffect } from 'react'
import Issue from './Issue'
import { getProjectIssues } from '../_service'

const IssueList = ({ projectId, projectName }) => {
  const [offset, setOffset] = useState(0)
  const [issues, setIssues] = useState([])
  const [totalCount, setTotalCount] = useState(null)

  useEffect(() => {
    getProjectIssues(projectId, offset).then(res => {
      if (res.message) setIssues(false)
      else {
        setIssues(res.issues)
        setTotalCount(res.total_count)
      }
    })
  }, [offset, projectId])

  if (!issues) {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <h3>No issues for <b>{projectName}</b></h3>
        </div>
      </div>
    )
  }

  if (issues.length === 0) {
    return (
      <div className='text-center spinners'>
        <div className='spinner-grow text-muted' />
        <div className='spinner-grow text-muted' />
        <div className='spinner-grow text-muted' />
      </div>
    )
  }
  return (
    <div>
      <h4><b>Issues</b></h4>
      <ul className='pagination'>
        <li className={offset === 0 ? 'page-item disabled' : 'page-item'}>
          <input type='button' className='page-link' value='Previous' onClick={() => setOffset(offset => offset - 25)} />
        </li>
        {(() => {
          const pages = []
          for (let i = 0; i < Math.floor(totalCount / 25) + 1; i++) {
            pages.push(
              <li key={i} className={offset === i * 25 ? 'page-item active' : 'page-item'}>
                <input type='button' className='page-link' value={i + 1} onClick={() => setOffset(i * 25)} />
              </li>
            )
          }

          return pages
        })()}
        <li className={totalCount - offset < 25 ? 'page-item disabled' : 'page-item'}>
          <input type='button' className='page-link' value='Next' onClick={() => setOffset(offset => offset + 25)} />
        </li>
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
