import React from 'react'
import { AuthContext } from '../../components-17-07-2026/Context API-05-08-2026/AuthContext'
import Header from '../../components-17-07-2026/Context API-05-08-2026/Header'
import Login from '../../components-17-07-2026/Context API-05-08-2026/Login'
import ThemeButton from '../../components-17-07-2026/Context API-05-08-2026/ThemeButton'
import { ThemeContext } from '../../components-17-07-2026/Context API-05-08-2026/ThemeContext'

function ApiPage() {
  return (
    <div>
        <AuthContext/>
        <Header/>
        <Login/>
        <ThemeButton/>
        <ThemeContext/>
    </div>
  )
}

export default ApiPage