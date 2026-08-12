import React from 'react'
import ErrorMessage from '../../components-17-07-2026/API Integration Assignment-04-08-2026/ErrorMessage'
import Loading from '../../components-17-07-2026/API Integration Assignment-04-08-2026/Loading'
import SearchBar from '../../components-17-07-2026/API Integration Assignment-04-08-2026/SerchBar'
import UserForm from '../../components-17-07-2026/API Integration Assignment-04-08-2026/UserForm'
import UserCard from '../../components-17-07-2026/API Integration Assignment-04-08-2026/UserCard'

function ApiIntegrationPage() {
  return (
    <div>
        <ErrorMessage/>
        <Loading/>
        <SearchBar/>
        <UserCard/>
        <UserForm/>
    </div>
  )
}

export default ApiIntegrationPage