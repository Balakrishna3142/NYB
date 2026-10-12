import { useEffect, useState } from "react";

import UserForm from "./UserForm";
import UserList from "./UserList";
import SearchFilter from "./SearchFilter";

import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "./services/api";

function App() {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [editingId, setEditingId] = useState(null);

  // GET Users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getUsers();

      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load users when app starts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Add / Update User
  const handleSubmit = async () => {
    if (!name || !email) {
      alert("Please enter name and email");
      return;
    }

    try {
      if (editingId) {
        // UPDATE
        const updatedUser = await updateUser(
          editingId,
          {
            name: name,
            email: email,
          }
        );

        setUsers(
          users.map((user) =>
            user.id === editingId
              ? { ...user, ...updatedUser }
              : user
          )
        );

        setEditingId(null);
      } else {
        // ADD
        const newUser = await addUser({
          name: name,
          email: email,
        });

        setUsers([...users, newUser]);
      }

      setName("");
      setEmail("");
    } catch (err) {
      setError(err.message);
    }
  };

  // Edit
  const handleEdit = (user) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);

      setUsers(
        users.filter((user) => user.id !== id)
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // Cancel Edit
  const cancelEdit = () => {
    setEditingId(null);
    setName("");
    setEmail("");
  };

  // Search + Filter
  const filteredUsers = users.filter((user) => {
    const searchMatch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const filterMatch =
      filter === "All" ||
      user.address?.city === filter;

    return searchMatch && filterMatch;
  });

  return (
    <div>
      <h1>User Management Application</h1>

      {/* Search and Filter */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <hr />

      {/* Add / Edit Form */}
      <UserForm
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        editingId={editingId}
        cancelEdit={cancelEdit}
      />

      <hr />

      {/* Loading State */}
      {loading && <h2>Loading users...</h2>}

      {/* Error Handling */}
      {!loading && error && (
        <div>
          <h2>Error: {error}</h2>

          <button onClick={fetchUsers}>
            Try Again
          </button>
        </div>
      )}

      {/* User List */}
      {!loading && !error && (
        <UserList
          users={filteredUsers}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default App;