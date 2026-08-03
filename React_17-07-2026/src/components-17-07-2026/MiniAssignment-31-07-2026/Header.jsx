import { useContext } from "react";
import { UserContext } from "./AppContext";

function Header(){

    const { user } = useContext(UserContext);

    return(

        <div>

            <h1>Mini Assignment</h1>

            <h2>Welcome {user}</h2>

        </div>

    )

}

export default Header;