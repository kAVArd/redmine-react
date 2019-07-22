import React, { useState } from 'react'
import Login from './components/Login'
import ProjectList from './components/ProjectList'
import Tracker from './components/Tracker'
import About from './components/About'
import Comments from './components/Comments'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProjectDetails from './components/ProjectDetails'
import IssueDetails from './components/IssueDetails'

function App () {
  const [isLogin, setIsLogin] = useState(true)

  const login = (e) => {
    e.preventDefault()
    setIsLogin(!isLogin)
  }

  if (isLogin) {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <Link to='/' className='navbar-brand'><b>Redmine</b></Link>
            <div className='collpase nav-collapse'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link'>Projects</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/tracker' className='nav-link'>Tracker</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/comments' className='nav-link'>Comments</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/about' className='nav-link'>About</Link>
                </li>
              </ul>
            </div>
            <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <a className='nav-link' href='/' onClick={login}>Log out</a>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path='/' component={ProjectList} />
          <Route exact path='/tracker' component={Tracker} />
          <Route exact path='/comments' component={Comments} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects/:id' component={ProjectDetails} />
          <Route exact path='/issues/:id' component={IssueDetails} />
        </div>
      </Router>
    )
  }

  return (
    <Login login={login} />
  )
}

export default App
