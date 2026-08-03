import { useContext } from "react";
import { UserContext } from "./AppContext";

function Login(){

    const { login,setLogin } = useContext(UserContext);

    return(

        <div>

            <h2>

                {login ? "Logged In" : "Logged Out"}

            </h2>

            <button>
                onClick={()=>setLogin(!login)}
            

                Login / Logout

            </button>

        </div>

    )

}

export default Login;