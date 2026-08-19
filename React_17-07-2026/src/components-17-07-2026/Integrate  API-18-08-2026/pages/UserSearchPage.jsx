import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

function UserSearchPage() {
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  const [city, setCity] = useState("All");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCity =
      city === "All" || user.address.city === city;

    return matchesSearch && matchesCity;
  });

  if (loading) {
    return (
      <div>
        <h2>Loading users...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Error: {error}</h2>

        <button onClick={fetchUsers}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={{ width: "600px", margin: "30px auto" }}>
      <h1>User Search & Filter</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search user by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "15px",
        }}
      />

      {/* Filter */}
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <option value="All">All Cities</option>
        <option value="Gwenborough">Gwenborough</option>
        <option value="Wisokyburgh">Wisokyburgh</option>
        <option value="McKenziehaven">McKenziehaven</option>
        <option value="South Elvis">South Elvis</option>
        <option value="Roscoeview">Roscoeview</option>
        <option value="South Christy">South Christy</option>
        <option value="Howemouth">Howemouth</option>
        <option value="Aliyaview">Aliyaview</option>
        <option value="Bartholomebury">
          Bartholomebury
        </option>
        <option value="Lebsackbury">Lebsackbury</option>
      </select>

      <h3>
        Users Found: {filteredUsers.length}
      </h3>

      {/* Users */}
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UserSearchPage;