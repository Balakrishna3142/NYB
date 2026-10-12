import { useState } from "react";

function App() {
  // Dynamic data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John",
      age: 22,
      active: true,
    },
    {
      id: 2,
      name: "Rahul",
      age: 25,
      active: false,
    },
    {
      id: 3,
      name: "Priya",
      age: 21,
      active: true,
    },
  ]);

  return (
    <div>
      <h1>Dynamic Rendering Example</h1>

      {users.length === 0 ? (
        <h2>No users found</h2>
      ) : (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>

              <p>Age: {user.age}</p>

              {/* Conditional Dynamic Rendering */}
              {user.active ? (
                <p>Status: Active</p>
              ) : (
                <p>Status: Inactive</p>
              )}

              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;