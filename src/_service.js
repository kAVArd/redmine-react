export const getProjects = () => {
  const requestOptions = {
    method: 'get',
    cradentials: 'include',
    headers: {
      'X-Redmine-API-Key': `${process.env.REACT_APP_TOKKEN}`,
      'Content-Type': 'application/json'
    }
  }

  // eslint-disable-next-line
  return fetch(`${process.env.REACT_APP_URL}/projects.json`, requestOptions)
    .then(res => res.json())
    .then(resObj => resObj.projects)
}

export const getProjectIssues = (projectId) => {
  const requestOptions = {
    method: 'get',
    cradentials: 'include',
    headers: {
      'X-Redmine-API-Key': `${process.env.REACT_APP_TOKKEN}`,
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }

  // eslint-disable-next-line
  return fetch(`${process.env.REACT_APP_URL}/issues.json?project_id=${projectId}&limit=25`, requestOptions)
    .then(res => res.json())
    .then(resObj => resObj.issues)
    .catch(e => console.log(e))
}

export const getProject = (projectId) => {
  const requestOptions = {
    method: 'get',
    cradentials: 'include',
    headers: {
      'X-Redmine-API-Key': `${process.env.REACT_APP_TOKKEN}`,
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }

  // eslint-disable-next-line
  return fetch(`${process.env.REACT_APP_URL}/projects/${projectId}.json`, requestOptions)
    .then(res => res.json())
    .then(resObj => resObj.project)
    .catch(e => console.log(e))
}
