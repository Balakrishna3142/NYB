import { useContext } from "react";

import { UserContext } from "./AppContext";

function Dashboard(){

    const { user,theme } = useContext(UserContext);

    return(

        <div>

            <h2>Dashboard</h2>

            <h3>User : {user}</h3>

            <h3>Theme : {theme}</h3>

        </div>

    )

}

export default Dashboard;