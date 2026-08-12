import React from 'react'
import Dashboard from '../../components-17-07-2026/GlobalState-30-07-2026/Dashboard'
import GlobalState from '../../components-17-07-2026/GlobalState-30-07-2026/GlobalState'
import Profile from '../../components-17-07-2026/GlobalState-30-07-2026/Profile'
import Header from '../../components-17-07-2026/GlobalState-30-07-2026/Header'
function GlobalStatePage() {
  return (
    <div>
        <GlobalState>
            <Dashboard/>
            <Header/>
            <Profile/>
        </GlobalState>
        
        
        
        
    </div>
  )
}

export default GlobalStatePage