import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const addUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            email: "rahul@gmail.com"
          })
        }
      );

      const data = await response.json();

      console.log(data);
      alert("User added successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add User</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addUser}>
        Add User
      </button>
    </div>
  );
}

export default App;