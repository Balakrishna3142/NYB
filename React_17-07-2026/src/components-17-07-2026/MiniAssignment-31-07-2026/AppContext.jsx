import { createContext, useState } from "react";

export const UserContext = createContext();

function AppContext({ children }) {

    const [user, setUser] = useState("Balakrishna");

    const [theme, setTheme] = useState("Light");

    return (

        <UserContext.Provider
            value={{
                user,
                setUser,
                theme,
                setTheme
            }}
        >

            {children}

        </UserContext.Provider>

    );

}

export default AppContext;