import React from 'react'

function Profile({ user }) {
  return (
    <div>
      <h2>Profile</h2>

      <p>User Name: {user}</p>
    </div>
  );
}

export default Profile;