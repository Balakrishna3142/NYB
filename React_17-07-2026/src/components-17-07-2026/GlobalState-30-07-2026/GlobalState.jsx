import { createContext, useState } from "react";
import Dashboard from "./Dashboard";

export const UserContext = createContext();

function GlobalState({ children }) {

  const [user, setUser] = useState("Balakrishna");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default GlobalState;