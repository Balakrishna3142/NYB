import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 101, name: "John" },
    { id: 102, name: "Rahul" },
    { id: 103, name: "Priya" },
  ]);

  return (
    <div>
      <h1>Proper Keys Example</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>User ID: {user.id}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;