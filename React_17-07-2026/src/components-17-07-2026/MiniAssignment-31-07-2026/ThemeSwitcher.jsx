import { useContext } from "react";

import { UserContext } from "./AppContext";

function ThemeSwitcher(){

    const { theme,setTheme } = useContext(UserContext);

    return(

        <div>

            <h2>Theme : {theme}</h2>

            <button
                onClick={()=>setTheme(

                    theme==="Light"

                    ?

                    "Dark"

                    :

                    "Light"

                )}
            >

                Switch Theme

            </button>

        </div>

    )

}

export default ThemeSwitcher;