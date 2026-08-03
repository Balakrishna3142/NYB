import { useContext } from "react";
import { UserContext } from "./GlobalState";

function Header() {

    const { user, setUser } = useContext(UserContext);

    return (

        <div>

            <h2>Profile Component</h2>

            <h3>Name : {user}</h3>

            <button onClick={() => setUser("Krishna")}>
                Change Name
            </button>

        </div>

    );

}

export default Header;