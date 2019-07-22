const requestOptions = {
  cradentials: 'include',
  headers: {
    'X-Redmine-API-Key': `${process.env.REACT_APP_TOKKEN}`,
    'Content-Type': 'application/json'
  }
}

export const getProjects = () => {
  const options = {
    ...requestOptions,
    method: 'get'
  }

  // eslint-disable-next-line
  return fetch(`${process.env.REACT_APP_URL}/projects.json`, options)
    .then(res => res.json())
    .then(resObj => resObj.projects)
    .catch(e => e)
}

export const getProjectIssues = (projectId, offset) => {
  const options = {
    ...requestOptions,
    method: 'get'
  }

  // eslint-disable-next-line
  return fetch(`${process.env.REACT_APP_URL}/issues.json?project_id=${projectId}&limit=25&offset=${offset}`, options)
    .then(res => res.json())
    .then(resObj => resObj)
    .catch(e => e)
}

export const getProject = (projectId) => {
  const options = {
    ...requestOptions,
    method: 'get'
  }

  // eslint-disable-next-line
  return fetch(`${process.env.REACT_APP_URL}/projects/${projectId}.json`, options)
    .then(res => res.json())
    .then(resObj => resObj.project)
    .catch(e => e)
}

export const getIssue = (issueId) => {
  const options = {
    ...requestOptions,
    method: 'get'
  }

  // eslint-disable-next-line
  return fetch(`${process.env.REACT_APP_URL}/issues/${issueId}.json`, options)
    .then(res => res.json())
    .then(resObj => resObj.issue)
    .catch(e => e)
}

export const postTracker = (issueId, date, hours, comment, activityId) => {
  const options = {
    ...requestOptions,
    body: JSON.stringify({
      time_entry: {
        issue_id: issueId,
        spent_on: date,
        hours: +hours,
        activity_id: activityId,
        comments: comment
      }
    }),
    method: 'post'
  }

  // eslint-disable-next-line
   return fetch(`${process.env.REACT_APP_URL}/time_entries.json`, options)
    .then(res => res.json())
    .then(resObj => resObj)
    .catch(e => e)
}
