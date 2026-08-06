import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { AuthContext } from './AuthContext'

function Header() {
    const { theme } =useContext(ThemeContext)
    const { user  } =userContext(AuthContext)
  return (
    <div>
         <h1>React Context API</h1>

      <h3>Theme : {theme}</h3>

      <h3>
        User : {user ? user : "Guest"}
      </h3>
    </div>
  )
}

export default Header