import React from 'react'

function UserCard() {
  return (
    <div>
              style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>

    </div>
  )
}

export default UserCard