import React from 'react'
import GrandChild from "./GrandChild"

function Child({ user }) {

  return (
    <div>

      <h3>Child Component</h3>

      <GrandChild user={user} />

    </div>
  );
}

export default Child