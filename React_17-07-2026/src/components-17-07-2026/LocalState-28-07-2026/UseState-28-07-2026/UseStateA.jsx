import React, { useState } from 'react'

function UseStateA() {

    let [a,set]=useState()
  return (
    <div>UseStateA
        <h3>{a}</h3>
        <h3>a</h3>
    </div>
  )
}

export default UseStateA