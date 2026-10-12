import { useEffect, useState } from "react";

import {
  getUsers,
  addUser,
  updateUser,
  patchUser,
  deleteUser,
} from "./api";

function App() {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("All");

  // Form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // GET
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getUsers();

      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch users when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  // POST
  const handleAdd = async () => {
    if (!name || !email) {
      alert("Enter name and email");
      return;
    }

    try {
      const newUser = await addUser({
        name: name,
        email: email,
      });

      setUsers([...users, newUser]);

      setName("");
      setEmail("");
    } catch (error) {
      setError(error.message);
    }
  };

  // PUT
  const handleUpdate = async (id) => {
    try {
      const updatedUser = await updateUser(id, {
        name: "Updated User",
        email: "updated@gmail.com",
      });

      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, ...updatedUser } : user
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // PATCH
  const handlePatch = async (id) => {
    try {
      const updatedUser = await patchUser(id, {
        name: "Patched User",
      });

      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, ...updatedUser } : user
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);

      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  // Search + Filter
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCity =
      cityFilter === "All" || user.address?.city === cityFilter;

    return matchesSearch && matchesCity;
  });

  return (
    <div>
      <h1>React API Integration</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      {/* Filter */}
      <select
        value={cityFilter}
        onChange={(e) => setCityFilter(e.target.value)}
      >
        <option value="All">All Cities</option>
        <option value="Gwenborough">Gwenborough</option>
        <option value="Wisokyburgh">Wisokyburgh</option>
        <option value="McKenziehaven">McKenziehaven</option>
      </select>

      <hr />

      {/* Add User */}
      <h2>Add User</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleAdd}>Add User</button>

      <hr />

      {/* Loading */}
      {loading && <h2>Loading...</h2>}

      {/* Error */}
      {!loading && error && (
        <div>
          <h2>Error: {error}</h2>
          <button onClick={fetchUsers}>Try Again</button>
        </div>
      )}

      {/* Empty */}
      {!loading && !error && filteredUsers.length === 0 && (
        <h2>No users found</h2>
      )}

      {/* Display users */}
      {!loading && !error && filteredUsers.length > 0 && (
        <div>
          {filteredUsers.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>

              <p>Email: {user.email}</p>

              <p>
                City: {user.address?.city || "No city"}
              </p>

              <button onClick={() => handleUpdate(user.id)}>
                PUT Update
              </button>

              <button onClick={() => handlePatch(user.id)}>
                PATCH Name
              </button>

              <button onClick={() => handleDelete(user.id)}>
                Delete
              </button>

              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;