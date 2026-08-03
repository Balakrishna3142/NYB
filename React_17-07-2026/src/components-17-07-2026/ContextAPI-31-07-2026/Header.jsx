import React, { useContext } from 'react'
import { UserContext } from './AppContext'


function Header() {
    const { user } = useContext(UserContext)
  return (
    <div>Header
        <h2>Header</h2>
        <h3>Welcome NYB Infotech</h3>
    </div>
  )
}

export default Header