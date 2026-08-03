import { useContext } from "react";

import { UserContext } from "./AppContext";

function UserProfile(){

    const { user,setUser } = useContext(UserContext);

    return(

        <div>

            <h2>User Profile</h2>

            <h3>{user}</h3>

            <button
                onClick={()=>setUser("Krishna")}
            >

                Change User

            </button>

        </div>

    )

}

export default UserProfile;