import React from 'react'

const Login = () => {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark justify-content-center'>
        <b className='navbar-brand'>Redmine</b>
      </nav>
      <div className='row justify-content-center login-form'>
        <div className='col-6'>
          <form action='' encType='application/json' method='post'>
            <div className='form-group'>
              <label htmlFor='email' className='form-label'>Email:</label>
              <input type='email' className='form-control' id='email' placeholder='Enter email' name='email' />
            </div>
            <div className='form-group'>
              <label htmlFor='pwd' className='form-label'>Password:</label>
              <input type='password' className='form-control' id='pwd' placeholder='Enter password' name='pswd' />
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
