const requestOptions = {
  cradentials: 'include',
  method: 'get',
  headers: {
    'X-Redmine-API-Key': `${process.env.REACT_APP_TOKKEN}`,
    'Content-Type': 'application/json'
  }
}

const processResFetch = (res, entity = '') => {
  return res.then(res => res.json())
    .then(resObj => (entity === '' ? resObj : resObj[entity]))
    .catch(e => e)
}

export const getProjects = () => {
  // eslint-disable-next-line
  return processResFetch(fetch(`${process.env.REACT_APP_URL}/projects.json`, requestOptions), 'projects')
}

export const getProjectIssues = (projectId, offset) => {
  return processResFetch(
    // eslint-disable-next-line
    fetch(`${process.env.REACT_APP_URL}/issues.json?project_id=${projectId}&limit=25&offset=${offset}`, requestOptions))
}

export const getProject = (projectId) => {
  // eslint-disable-next-line
  return processResFetch(fetch(`${process.env.REACT_APP_URL}/projects/${projectId}.json`, requestOptions), 'project')
}

export const getIssue = (issueId) => {
  // eslint-disable-next-line
  return processResFetch(fetch(`${process.env.REACT_APP_URL}/issues/${issueId}.json`, requestOptions), 'issue')
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
   return processResFetch(fetch(`${process.env.REACT_APP_URL}/time_entries.json`, options))
}
