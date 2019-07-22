const requestOptions = {
  cradentials: 'include',
  headers: {
    'X-Redmine-API-Key': `${process.env.REACT_APP_TOKKEN}`,
    'Content-Type': 'application/json'
  },
  mode: 'cors'
}

export const getProjects = () => {
  requestOptions.methd = 'get'
  // eslint-disable-next-line
  return fetch(`${process.env.REACT_APP_URL}/projects.json`, requestOptions)
    .then(res => res.json())
    .then(resObj => resObj.projects)
    .catch(e => e)
}

export const getProjectIssues = (projectId, offset) => {
  requestOptions.method = 'get'
  // eslint-disable-next-line
  return fetch(`${process.env.REACT_APP_URL}/issues.json?project_id=${projectId}&limit=25&offset=${offset}`, requestOptions)
    .then(res => res.json())
    .then(resObj => resObj)
    .catch(e => e)
}

export const getProject = (projectId) => {
  requestOptions.method = 'get'
  // eslint-disable-next-line
  return fetch(`${process.env.REACT_APP_URL}/projects/${projectId}.json`, requestOptions)
    .then(res => res.json())
    .then(resObj => resObj.project)
    .catch(e => e)
}

export const getIssue = (issueId) => {
  requestOptions.method = 'get'
  // eslint-disable-next-line
  return fetch(`${process.env.REACT_APP_URL}/issues/${issueId}.json`, requestOptions)
    .then(res => res.json())
    .then(resObj => resObj.issue)
    .catch(e => e)
}

export const postTracker = (issueId, date, hours, comment, activityId) => {
  requestOptions.body = JSON.stringify({
    time_entry: {
      issue_id: issueId,
      spent_on: date,
      hours: +hours,
      activity_id: activityId,
      comment: comment
    }
  })
  requestOptions.method = 'post'

  // eslint-disable-next-line
   return fetch(`${process.env.REACT_APP_URL}/time_entries.json`, requestOptions)
    .then(res => res.json())
    .then(resObj => console.log(resObj))
    .catch(e => e)
}
