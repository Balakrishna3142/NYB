import React from 'react'
import Child from './Child'

function Parent() {

  const user = "Bala";

  return (
    <div>

      <h2>Parent Component</h2>

      <Child user={user} />

    </div>
  );
}

export default Parent