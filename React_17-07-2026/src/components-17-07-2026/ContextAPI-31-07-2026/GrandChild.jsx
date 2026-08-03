import { useContext } from 'react'
import { UserContext } from "./AppContext"

function GrandChild() {
    const { user,setUser } = useContext(UserContext)
  return (
    <div>
        <h2>This is Grand Child</h2>
        <h3>{user}</h3>
        <button>
            onClick={()=>setUser("Krishna")}
            Change User
        </button>

    </div>
  )
}

export default GrandChild