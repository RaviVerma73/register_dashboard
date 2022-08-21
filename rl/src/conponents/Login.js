import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const Login = () => {
  return (
    <div className='container mt-5'>
      <h2 style={{ fontWeight: 400 }}>Login page</h2>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <form>
            <div className="mb-3">
              <label  className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>

            <div id="emailHelp" className="form-text mt-4">Creat Your New Account. <NavLink to="/register">Register</NavLink></div>
          </form>
      </CardContent>
    </Card>
        </div>
  )
}

export default Login
