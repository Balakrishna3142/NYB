import { useEffect, useState } from "react";
import RegistrationForm from "./RegistrationForm";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Load users from localStorage
  useEffect(() => {
    const savedUsers = localStorage.getItem("users");

    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  // Save users whenever users change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Add User
  const handleAddUser = (user) => {
    const newUser = {
      id: Date.now(),
      ...user,
    };

    setUsers([...users, newUser]);
  };

  // Delete User
  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);

    setUsers(updatedUsers);
  };

  // Edit User
  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  // Update User
  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );

    setUsers(updatedUsers);
    setEditingUser(null);
  };

  return (
    <div>
      <h1>User Registration App</h1>

      <RegistrationForm
        onAddUser={handleAddUser}
        editingUser={editingUser}
        onUpdateUser={handleUpdateUser}
      />

      <hr />

      <UserList
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
}

export default App;