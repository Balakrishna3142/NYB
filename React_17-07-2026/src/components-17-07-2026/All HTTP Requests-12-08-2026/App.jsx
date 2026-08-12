import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // 1. GET - Fetch users
  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
      console.log("GET:", data);
    } catch (error) {
      console.log(error);
    }
  };

  // 2. POST - Create user
  const addUser = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "Rahul",
          email: "rahul@gmail.com"
        })
      }
    );

    const data = await response.json();

    console.log("POST:", data);
  };

  // 3. PUT - Replace/update user
  const updateUser = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "Rahul Updated",
          email: "updated@gmail.com"
        })
      }
    );

    const data = await response.json();

    console.log("PUT:", data);
  };

  // 4. PATCH - Partially update user
  const patchUser = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "Rahul Patched"
        })
      }
    );

    const data = await response.json();

    console.log("PATCH:", data);
  };

  // 5. DELETE - Delete user
  const deleteUser = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method: "DELETE"
      }
    );

    if (response.ok) {
      console.log("DELETE: User deleted successfully");
    }
  };

  // GET when component loads
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>API CRUD Operations</h1>

      <button onClick={getUsers}>
        GET Users
      </button>

      <button onClick={addUser}>
        POST User
      </button>

      <button onClick={updateUser}>
        PUT User
      </button>

      <button onClick={patchUser}>
        PATCH User
      </button>

      <button onClick={deleteUser}>
        DELETE User
      </button>

      <h2>User List</h2>

      {users.map((user) => (
        <p key={user.id}>
          {user.id}. {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default App;