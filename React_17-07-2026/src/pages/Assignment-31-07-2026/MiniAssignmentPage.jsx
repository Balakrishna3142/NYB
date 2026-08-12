import React from 'react'
import AppContext from '../../components-17-07-2026/MiniAssignment-31-07-2026/AppContext'
import Counter from '../../components-17-07-2026/MiniAssignment-31-07-2026/Countr'
import Dashboard from '../../components-17-07-2026/MiniAssignment-31-07-2026/Dashboard'
import Footer from '../../components-17-07-2026/MiniAssignment-31-07-2026/Footer'
import Header from '../../components-17-07-2026/MiniAssignment-31-07-2026/Header'
import ThemeSwitcher from '../../components-17-07-2026/MiniAssignment-31-07-2026/ThemeSwitcher'
import UserProfile from '../../components-17-07-2026/MiniAssignment-31-07-2026/UserProfile'

function MiniAssignmentPage() {
  return (
    <div>
        <AppContext/>
        <Counter/>
        <Dashboard/>
        <Footer/>
        <Header/>
        <ThemeSwitcher/>
        <UserProfile/>
    </div>
  )
}

export default MiniAssignmentPage