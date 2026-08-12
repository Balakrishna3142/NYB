import React from 'react'
import AdminDashboard from '../../components-17-07-2026/roles and authentication-10-08-2026/AdminDashboard'
import App from '../../components-17-07-2026/roles and authentication-10-08-2026/App'
import LoginMessage from '../../components-17-07-2026/roles and authentication-10-08-2026/LoginMessage'
import RoleBasedRendering from '../../components-17-07-2026/roles and authentication-10-08-2026/RoleBasedRendering'
import StudentDashboard from '../../components-17-07-2026/roles and authentication-10-08-2026/StudentDashboard'
import TeacherDashboard from '../../components-17-07-2026/roles and authentication-10-08-2026/TeacherDashboard'

function RolesPage() {
  return (
    <div>
        <AdminDashboard/>
        <App/>
        <LoginMessage/>
        <RoleBasedRendering/>
        <StudentDashboard/>
        <TeacherDashboard/>
    </div>
  )
}

export default RolesPage