import React, { useState } from 'react'
import G from './G'
import H from './H'

function D() {
    let[a,set]=useState(10)
  return (
    <div>
        D
        <G value={a}/>
        <H value={a}/>
        <H/>

    </div>
  )
}

export default D