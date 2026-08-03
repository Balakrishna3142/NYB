import React, { useState } from 'react'

function Button() {
    const[status, setStatus] =useState(false)
  return (
    <div>
        <h2>button Exampl</h2>
         <button onClick={() => setStatus(!status)}>

         </button>
         <h3>
                 {status ? "Light ON" : "Light OFF"}
         </h3>
    </div>
  )
}

export default Button