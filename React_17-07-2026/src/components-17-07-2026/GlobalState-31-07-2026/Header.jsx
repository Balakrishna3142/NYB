import React from 'react'
import { useContext } from 'react'
import { UserContext } from './AppContext'

function Header() {
    const { user } =useContext(UserContext)
  return (
    <div>
        <h2>Header</h2>
        <h3>Welcome {user}</h3>
    </div>
  )
}

export default Header