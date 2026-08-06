import React from 'react'
import Profile from './Profile'
function Home({ user }) {
  return (
    <div>
      <h2>Home</h2>

      <Profile user={user} />
    </div>
  );
}
export default Home