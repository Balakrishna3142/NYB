import React from 'react'
import StateCounter from '../../tasks-17-07-2026/State&Props_20-07-2026/StateCounter'
import Parent from '../../tasks-17-07-2026/State&Props_20-07-2026/Parent'
import User from '../../tasks-17-07-2026/State&Props_20-07-2026/User'
import ColorChanger from '../../tasks-17-07-2026/State&Props_20-07-2026/UiUsingState'


const StatePage = () => {
  return (
    <div>StatePage
         <Parent/>
         <StateCounter/>
         <User/>
         <ColorChanger/>
        

    </div>
  )
}

export default StatePage