import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import {
  CTextField,
  CButton 
} from '../custom' 


function Login(props) {

  useEffect(() => {
    document.title = 'Login'
    // return () => {
    //   effect
    // };
  }, [])

  return (
    <div className='container justify-content-center mt-5'>
      <h3 className='mt-3'> LOGIN </h3>
      <div className='mt-5'>
        <div className="form-group">
          <label>Username</label>
          <CTextField 
            name='username'
            label='Username'
            className='form-control'
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <CTextField 
            type='password'
            name='password'
            label='Password'
            className='form-control'
          />
        </div>
        <CButton 
          name='Login'
          color='secondary'
          className='mr-3'
        />
        <CButton 
          name='Register'
          variant='outlined'
          onClick={()=>props.history.push('/register')}
        />
      </div>
    </div>
  )
}

export default Login