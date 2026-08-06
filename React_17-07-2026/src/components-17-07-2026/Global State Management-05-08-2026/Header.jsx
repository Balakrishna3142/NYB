import React from 'react'

function Header({ user }) {
  return (
    <div>
        <h2>Header</h2>
        <h3>Welcome {user}</h3>
    </div>
  )
}

export default Header