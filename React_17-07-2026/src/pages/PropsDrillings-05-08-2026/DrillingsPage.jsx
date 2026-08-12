import React from 'react'
import App from '../../components-17-07-2026/Props Drilling-05-08-2026/App'
import Child from '../../components-17-07-2026/Props Drilling-05-08-2026/Child'
import GrandChild from '../../components-17-07-2026/Props Drilling-05-08-2026/GrandChild'
import Home from '../../components-17-07-2026/Props Drilling-05-08-2026/Home'
import Parent from '../../components-17-07-2026/Props Drilling-05-08-2026/Parent'

function DrillingsPage() {
  return (
    <div>
        <App/>
        <Child/>
        <GrandChild/>
        <Home/>
        <Parent/>
    </div>
  )
}

export default DrillingsPage