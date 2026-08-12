import React from 'react'
import AppContext from '../../components-17-07-2026/GlobalState-31-07-2026/AppContext'
import Dashboard from '../../components-17-07-2026/GlobalState-31-07-2026/Dashboard'
import Header from '../../components-17-07-2026/GlobalState-31-07-2026/Header'
import Counter from '../../components-17-07-2026/LocalState-31-07-2026/Counter'

function LocalVsGlobalStatePage() {
  return (
    <div>
        <Counter/>
        <AppContext/>
        <Dashboard/>
        <Header/>
        

    </div>
  )
}

export default LocalVsGlobalStatePage