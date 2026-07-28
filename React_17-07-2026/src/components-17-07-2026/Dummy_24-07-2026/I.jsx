import React, { useState } from 'react'

function I() {
    let[value,setValue]=useState(10)
  return (
    <div>I
        <h3>this is the value in I {value}</h3>
    </div>
  )
}

export default I