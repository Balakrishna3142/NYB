import { useEffect, useState } from "react";
import {
  getUsers,
  addUser,
  deleteUser
} from "./userService"

function App() {
  const [users, setUsers] = useState([]);

  // GET
  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // POST
  const handleAddUser = () => {
    addUser({
      name: "Rahul",
      email: "rahul@gmail.com"
    }).then((response) => {
      console.log("Added:", response.data);
    });
  };

  // DELETE
  const handleDelete = (id) => {
    deleteUser(id).then(() => {
      setUsers(
        users.filter((user) => user.id !== id)
      );
    });
  };

  return (
    <div>
      <h1>User Management</h1>

      <button onClick={handleAddUser}>
        Add User
      </button>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <button onClick={() => handleDelete(user.id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;