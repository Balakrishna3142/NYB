import { createContext, useState } from "react";

export const UserContext = createContext();

function AppContext({ children }) {

    const [user, setUser] = useState("pavan");

    const [theme, setTheme] = useState("Light");

    const [login, setLogin] = useState(false);

    return (

        <UserContext.Provider
            value={{
                user,
                setUser,
                theme,
                setTheme,
                login,
                setLogin
            }}
        >

            {children}

        </UserContext.Provider>

    );

}

export default AppContext;