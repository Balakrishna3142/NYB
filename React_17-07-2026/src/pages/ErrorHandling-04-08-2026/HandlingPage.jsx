import React from 'react'
import ErrorMessage from '../../components-17-07-2026/Error Handling-04-08-2026/ErrorMessage'
import Loading from '../../components-17-07-2026/Error Handling-04-08-2026/Loading'
import UserCard from '../../components-17-07-2026/Error Handling-04-08-2026/UserCard'

function HandlingPage() {
  return (
    <div>
        <ErrorMessage/>
        <Loading/>
        <UserCard/>
    </div>
  )
}

export default HandlingPage