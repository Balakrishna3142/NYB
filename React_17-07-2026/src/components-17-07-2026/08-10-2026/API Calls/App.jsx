import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // GET REQUEST//
  const getUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // POST REQUEST//
  const addUser = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: name,
          email: email,
        }),
      });

      const newUser = await response.json();

      setUsers([...users, newUser]);

      setName("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  // PUT REQUEST//
  const updateUser = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: "Updated User",
          email: "updated@gmail.com",
        }),
      });

      const updatedUser = await response.json();

      setUsers(
        users.map((user) =>
          user.id === id ? updatedUser : user
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  // PATCH REQUEST
  const patchUser = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: "Patched User",
        }),
      });

      const updatedUser = await response.json();

      setUsers(
        users.map((user) =>
          user.id === id
            ? { ...user, ...updatedUser }
            : user
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE REQUEST
  const deleteUser = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setUsers(
        users.filter((user) => user.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  // GET API WHEN PAGE LOADS
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>React API CRUD</h1>

      {/* POST */}
      <h2>Add User</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={addUser}>
        Add User
      </button>

      <hr />

      {/* GET */}
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>

          <p>{user.email}</p>

          {/* PUT */}
          <button onClick={() => updateUser(user.id)}>
            PUT
          </button>

          {/* PATCH */}
          <button onClick={() => patchUser(user.id)}>
            PATCH
          </button>

          {/* DELETE */}
          <button onClick={() => deleteUser(user.id)}>
            DELETE
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;