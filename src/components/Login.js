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
            <div class='form-group'>
              <label for='email'>Email:</label>
              <input type='email' class='form-control' id='email' placeholder='Enter email' name='email' />
            </div>
            <div class='form-group'>
              <label for='pwd'>Password:</label>
              <input type='password' class='form-control' id='pwd' placeholder='Enter password' name='pswd' />
            </div>
            <button type='submit' class='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
