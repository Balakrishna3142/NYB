
import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const UserContext = createContext();

// 2. Provider
function UserProvider({ children }) {
  const [user, setUser] = useState("Rahul");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Navbar uses useContext
function Navbar() {
  const { user } = useContext(UserContext);

  return <h2>Welcome, {user}!</h2>;
}

// 4. Profile uses Consumer
function Profile() {
  return (
    <UserContext.Consumer>
      {({ user }) => <h3>Profile: {user}</h3>}
    </UserContext.Consumer>
  );
}

// 5. Dashboard passes no props (no prop drilling)
function Dashboard() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <Profile />

      <p>Global State: {user}</p>

      <button onClick={() => setUser("Priya")}>
        Change User
      </button>
    </div>
  );
}

// 6. Main App
export default function App() {
  return (
    <UserProvider>
      <div>
        <h1>React Context API Example</h1>
        <Dashboard />
      </div>
    </UserProvider>
  );
}
