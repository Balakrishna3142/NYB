import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const updateUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name
          })
        }
      );

      const data = await response.json();

      console.log(data);
      alert("User updated successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Update User</h1>

      <input
        type="text"
        placeholder="Enter new name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={updateUser}>
        Update Name
      </button>
    </div>
  );
}

export default App;