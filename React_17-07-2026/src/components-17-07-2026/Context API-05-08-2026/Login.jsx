import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'

function Login() {
    const { user, login, logout } = useContext(AuthContext)
  return (
    <div>
         {
        user ? (
          <>
            <h2>Welcome {user}</h2>
            <button onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <h2>Please Login</h2>
            <button onClick={login}>
              Login
            </button>
          </>
        )
      }
    </div>
  )
}

export default Login