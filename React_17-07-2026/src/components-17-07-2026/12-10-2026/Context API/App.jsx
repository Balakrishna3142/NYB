
import React, { createContext, useContext, useState } from "react";

//  Creating Context
const UserContext = createContext();

//  Provider
function UserProvider({ children }) {
  const [user, setUser] = useState("Rahul");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Consumer component
function Header() {
  return (
    <UserContext.Consumer>
      {(value) => <h2>Consumer: Welcome, {value.user}!</h2>}
    </UserContext.Consumer>
  );
}

//  useContext Hook
function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>useContext: Hello, {user}!</h2>
      <button onClick={() => setUser("Priya")}>
        Change User
      </button>
    </div>
  );
}

//  Props example
function Greeting({ name }) {
  return <h2>Props: Hello, {name}!</h2>;
}

//  Main App
function App() {
  return (
    <UserProvider>
      <div>
        <h1>React Context API Example</h1>

        <Header />
        <Profile />

        <Greeting name="Arun" />
      </div>
    </UserProvider>
  );
}

export default App;
