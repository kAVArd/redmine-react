import React, { useState } from 'react'
import { formatDate } from '../_helper'

const SpentTimeForm = ({ issue, handlePosting }) => {
  const [date, setDate] = useState(formatDate(Date.now()))
  const [hours, setHours] = useState(undefined)
  const [comment, setComment] = useState('')
  const [overtime, setOvertime] = useState(false)
  const [activityId, setActivityId] = useState(9)
  const activityArray = [
    { id: 8, name: 'Design' },
    { id: 9, name: 'Development' },
    { id: 10, name: 'Management' },
    { id: 11, name: 'Testing' },
    { id: 12, name: 'Automation QA' }
  ]

  return (
    <div className='row'>
      <div className='col-7'>
        <h4>Spent time</h4>
        <form onSubmit={(e) => {
          e.preventDefault()
          handlePosting(date, hours, comment, activityId)
        }}>
          <div className='form-group'>
            <label htmlFor='date' className='tracker-label'>Date<span className='required'>*</span></label>
            <input type='date' className='form-control tracker-input' id='date' value={date} onChange={e => setDate(e.target.value)} />
          </div>
          <div className='form-group'>
            <label htmlFor='hours' className='tracker-label'>Hours<span className='required'>*</span></label>
            <input type='number' className='form-control tracker-input' id='hours' onChange={e => setHours(e.target.value)} />
          </div>
          <div className='form-group'>
            <label htmlFor='comment' className='tracker-label'>Comment</label>
            <input type='text' className='form-control comment' id='comment' onChange={e => setComment(e.target.value)} />
          </div>
          <div className='form-group'>
            <label htmlFor='activity' className='tracker-label'>Activity<span className='required'>*</span></label>
            <select className='form-control tracker-input' id='activity' value={9} onChange={e => setActivityId(e.target.value)}>
              {activityArray.map(activity => {
                if (activity.id === 9) return <option key={activity.id} value={activity.id}>{activity.name}</option>
                return <option key={activity.id} value={activity.id}>{activity.name}</option>
              })}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='overtime' className='tracker-label'>Overtime<span className='required'>*</span></label>
            <input type='checkbox' id='overtime' checked={overtime} onChange={e => setOvertime(e.target.checked)} />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-secondary' id='tracker-submit'>Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SpentTimeForm
