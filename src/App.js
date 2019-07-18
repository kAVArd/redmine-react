import React from 'react'
import Login from './components/Login'
import Projects from './components/Projects'
import Tracker from './components/Tracker'
import About from './components/About'
import Comments from './components/Comments'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App () {
  const isLogin = true

  if (isLogin) {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <Link to='/' className='navbar-brand'><b>Redmine</b></Link>
            <div className='collpase nav-collapse'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to='/projects' className='nav-link'>Projects</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/create' className='nav-link'>Tracker</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/comments' className='nav-link'>Comments</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/about' className='nav-link'>About</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path='/' component={Projects} />
          <Route exact path='/tracker' component={Tracker} />
          <Route exact path='/comments' component={Comments} />
          <Route exact path='/about' component={About} />
        </div>
      </Router>
    )
  }

  return (
    <Login />
  )
}

export default App
