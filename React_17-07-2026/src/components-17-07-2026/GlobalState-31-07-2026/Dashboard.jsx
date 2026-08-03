import React from 'react'
import { UserContext } from './AppContext'

function Dashboard() {
    const { user, setUser } = useContext(UserContext)
  return (
    <div>
        <h2>Dashboard</h2>
        <h3>User : {user}</h3>
           <button onClick={() => setUser("Krishna")}>
            Change User
           </button>
              
            
    
    </div>
  )
}

export default Dashboard