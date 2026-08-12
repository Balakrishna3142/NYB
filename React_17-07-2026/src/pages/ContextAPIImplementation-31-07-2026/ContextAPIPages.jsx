import React from 'react'
import AppContext from '../../components-17-07-2026/ContextAPI-31-07-2026/AppContext'
import Child from '../../components-17-07-2026/ContextAPI-31-07-2026/Child'
import GrandChild from '../../components-17-07-2026/ContextAPI-31-07-2026/GrandChild'
import Header from '../../components-17-07-2026/ContextAPI-31-07-2026/Header'
import Login from '../../components-17-07-2026/ContextAPI-31-07-2026/Login'
import Parent from '../../components-17-07-2026/ContextAPI-31-07-2026/Parent'
import Theme from '../../components-17-07-2026/ContextAPI-31-07-2026/Theme'

function ContextAPIPage() {
  return (
    <div>
        <AppContext/>
        <Child/>
        <GrandChild/>
        <Header/>
        <Login/>
        <Parent/>
        <Theme/>
    </div>
  )
}

export default ContextAPIPage