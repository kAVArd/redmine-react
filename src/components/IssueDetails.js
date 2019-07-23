import React, { useState, useEffect } from 'react'
import { getIssue, postTracker } from '../_service'
import { formatDateTime } from '../_helper'
import SpentTimeForm from './SpentTimeForm'

const IssueDetails = (props) => {
  const [issueId] = useState(props.match.params.id)
  const [issue, setIssue] = useState(null)

  useEffect(() => {
    getIssue(issueId).then(issue => setIssue(issue))
  }, [issueId])

  if (!issue) {
    return (
      <div className='text-center spinners'>
        <div className='spinner-grow text-muted' />
        <div className='spinner-grow text-muted' />
        <div className='spinner-grow text-muted' />
      </div>
    )
  }

  const handlePosting = (date, hours, comment, activityId) => {
    postTracker(issueId, date, hours, comment, activityId).then(res => {
      if (res.time_entry) {
        getIssue(issueId).then(issue => {
          console.log(issue)
          setIssue(issue)
        })
      }
    })
  }

  return (
    <div className='container'>
      <h3><b>Issue #{issue.id}</b></h3>
      <div className='row'>
        <div className='col-4'>
          <h6><b>Assigned to:</b> {issue.assigned_to.name}</h6>
          <h6><b>Author:</b> {issue.author.name}</h6>
          <h6><b>Subject:</b> {issue.subject}</h6>
          <h6><b>Project:</b> {issue.project.name}</h6>
          <h6><b>Status:</b> {issue.status.name}</h6>
          <h6><b>Priority:</b> {issue.priority.name}</h6>
        </div>
        <div className='col-4'>
          <h6><b>Total spent hours:</b> {issue.total_spent_hours}</h6>
          <h6><b>Tracker:</b> {issue.tracker.name}</h6>
          <h6><b>Start date:</b> {issue.start_date}</h6>
          <h6><b>Created:</b> {formatDateTime(issue.created_on)}</h6>
          <h6><b>Updated:</b> {formatDateTime(issue.updated_on)}</h6>
        </div>
      </div>
      <hr />
      <SpentTimeForm issue={issue} handlePosting={handlePosting} />
    </div>
  )
}

export default IssueDetails
