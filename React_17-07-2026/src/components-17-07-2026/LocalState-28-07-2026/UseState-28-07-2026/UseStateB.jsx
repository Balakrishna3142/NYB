import React, { useState } from 'react'

function UseStateB() {
    let [useStateB,hello]=useState(10)
    let set =()=>{
        hello(useStateB+1)

    }
  return (
    <div>
        <h3>A</h3>
        <button onClick={set}>click</button>

    </div>
  )
}

export default UseStateB
