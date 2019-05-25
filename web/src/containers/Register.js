import React from 'react'
import {
  CTextField,
  CButton 
} from '../custom' 

function Register(props) {
    return (
      <div className='container justify-content-center mt-5'>
      <h3 className='mt-3 text-center'> REGISTER </h3>
      <div className='mt-5'>
        <div className="form-group">
          <label>Name</label>
          <CTextField 
            name='name'
            className='form-control'
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <CTextField 
            name='username'
            className='form-control'
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <CTextField 
            type='password'
            name='password'
            className='form-control'
          />
        </div>
        <CButton 
          name='Register'
          color='secondary'
          className='mr-3'
        />
        <CButton 
          name='Login'
          variant='outlined'
          onClick={()=>props.history.push('/login')}
        />
      </div>
    </div>
    )  
}

export default Register