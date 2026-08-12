import React from 'react'
import AddUser from '../../components-17-07-2026/ApiAxios-03-08-2026/AddUser'
import AxiosConfig from '../../components-17-07-2026/ApiAxios-03-08-2026/AxiosConfig'
import DeleteUser from '../../components-17-07-2026/ApiAxios-03-08-2026/DeleteUser'
import FetchExample from '../../components-17-07-2026/ApiAxios-03-08-2026/FetchExample'
import GetUsers from '../../components-17-07-2026/ApiAxios-03-08-2026/GetUsers'
import PatchUser from '../../components-17-07-2026/ApiAxios-03-08-2026/PatchUser'
import UpdateUser from '../../components-17-07-2026/ApiAxios-03-08-2026/UpdateUser'

function UsingAxiousPage() {
  return (
    <div>
        <AddUser/>
        <AxiosConfig/>
        <DeleteUser/>
        <FetchExample/>
        <GetUsers/>
        <PatchUser/>
        <UpdateUser/>
    </div>
  )
}

export default UsingAxiousPage