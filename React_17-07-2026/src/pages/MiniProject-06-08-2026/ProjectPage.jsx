import React from 'react'
import Counter from '../../components-17-07-2026/Mini Project-06-08-2026/Components/Counter'
import Header from '../../components-17-07-2026/Mini Project-06-08-2026/Components/Header'
import StudentForm from '../../components-17-07-2026/Mini Project-06-08-2026/Components/StudentForm'
import StudentList from '../../components-17-07-2026/Mini Project-06-08-2026/Components/StudentList'
import ThemeButton from '../../components-17-07-2026/Mini Project-06-08-2026/Components/ThemeButton'
import { ThemeContext } from '../../components-17-07-2026/Mini Project-06-08-2026/context/ThemeContext'
import App from '../../components-17-07-2026/Mini Project-06-08-2026/App'

function ProjectPage() {
  return (
    <div>
        <Counter/>
        <Header/>
        <StudentForm/>
        <StudentList/>
        <ThemeButton/>
        <ThemeContext/>
        <App/>
        
        
    </div>
  )
}

export default ProjectPage