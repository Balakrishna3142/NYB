import React from 'react'
import App from '../../components-17-07-2026/conditional rendering-10-08-2026/App'
import Dashboard from '../../components-17-07-2026/conditional rendering-10-08-2026/Dashboard'
import Home from '../../components-17-07-2026/conditional rendering-10-08-2026/Home'
import Login from '../../components-17-07-2026/conditional rendering-10-08-2026/Login'
import Profile from '../../components-17-07-2026/conditional rendering-10-08-2026/Profile'
import UserStatus from '../../components-17-07-2026/conditional rendering-10-08-2026/UserStatus'

function ConditionalPage() {
  return (
    <div>
        <App/>
        <Dashboard/>
        <Home/>
        <Login/>
        <Profile/>
        <UserStatus/>
    </div>
  )
}

export default ConditionalPage