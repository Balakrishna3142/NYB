import React from 'react'
import Dashboard from '../../components-17-07-2026/ContextAPI-30-07-2026/Dashboard'
import Header from '../../components-17-07-2026/ContextAPI-30-07-2026/Header'
import Login from '../../components-17-07-2026/ContextAPI-30-07-2026/Login'
import Profile from '../../components-17-07-2026/ContextAPI-30-07-2026/Profile'
import Theme from '../../components-17-07-2026/ContextAPI-30-07-2026/Theme'
import  AppContext  from '../../components-17-07-2026/ContextAPI-30-07-2026/AppContext'

function ContextAPIPage() {
  return (
    <div>
        <AppContext>
        <Dashboard/>
        <Header/>
        <Login/>
        <Profile/>
        <Theme/>
        </AppContext>
    </div>
  )
}

export default ContextAPIPage