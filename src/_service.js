const requestOptions = {
  cradentials: 'include',
  headers: {
    'X-Redmine-API-Key': `${process.env.REACT_APP_TOKKEN}`,
    'Content-Type': 'application/json'
  }
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
