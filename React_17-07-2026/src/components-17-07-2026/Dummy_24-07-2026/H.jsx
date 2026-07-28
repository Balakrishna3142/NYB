import React, { useState } from 'react'
import I from './I'

function H(props) {
    
  return (
    <div>H
        <I/>
        
        <h3>this is the value in H from D{props.value}</h3>
    </div>
  )
}
export default H