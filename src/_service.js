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
