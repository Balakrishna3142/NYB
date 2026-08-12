import React from 'react'
import AdminDashboard from '../../../components-17-07-2026/Login/Logout component-10-08-2026/AdminDashboard'
import App from '../../../components-17-07-2026/Login/Logout component-10-08-2026/App'
import LoginLogout from '../../../components-17-07-2026/Login/Logout component-10-08-2026/LoginLogout'
import MiniPractice from '../../../components-17-07-2026/Login/Logout component-10-08-2026/MiniPractice'
import StudentDashboard from '../../../components-17-07-2026/Login/Logout component-10-08-2026/StudentDashboard'
import TeacherDashboard from '../../../components-17-07-2026/Login/Logout component-10-08-2026/TeacherDashboard'

function MiniPractcePage() {
  return (
    <div>
        <AdminDashboard/>
        <App/>
        <LoginLogout/>
        <MiniPractice/>
        <StudentDashboard/>
        <TeacherDashboard/>
    </div>
  )
}

export default MiniPractcePage