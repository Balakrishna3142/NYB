import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {

  const [user, setUser] = useState("Balakrishna");
  const [theme, setTheme] = useState("Light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;