import React from 'react'

const Login = ({ login }) => {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark justify-content-center'>
        <b className='navbar-brand'>Redmine</b>
      </nav>
      <div className='row justify-content-center login-form'>
        <div className='col-6'>
          <form onSubmit={e => login(e)}>
            <div className='form-group'>
              <label htmlFor='username' className='form-label'>Username:</label>
              <input
                type='text'
                className='form-control'
                id='username'
                placeholder='Enter username'
                name='username'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password' className='form-label'>Password:</label>
              <input
                type='password'
                className='form-control'
                id='password'
                placeholder='Enter password'
                name='password'
              />
            </div>
            <div className='text-center'>
              <button type='submit' className='btn btn-secondary'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
