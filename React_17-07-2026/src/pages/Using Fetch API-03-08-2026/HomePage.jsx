import React from 'react'
import CreateUser from '../../components-17-07-2026/Using Fetch API-03-08-2026/CreateUser'
import DeleteUser from '../../components-17-07-2026/Using Fetch API-03-08-2026/DeleteUser'
import GetUsers from '../../components-17-07-2026/Using Fetch API-03-08-2026/GetUsers'
import PatchUser from '../../components-17-07-2026/Using Fetch API-03-08-2026/PatchUser'
import UpdateUser from '../../components-17-07-2026/Using Fetch API-03-08-2026/UpdateUser'

function Home() {
  return (
    <div>
        <CreateUser/>
        <DeleteUser/>
        <GetUsers/>
        <PatchUser/>
        <UpdateUser/>
    </div>
  )
}

export default Home