import { useEffect, useState } from "react";

function App() {
  // API response data
  const [users, setUsers] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      // Start loading
      setLoading(true);

      // Clear previous error
      setError("");

      // API call
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      // Check HTTP response
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      // Convert response to JSON
      const data = await response.json();

      // Store API response
      setUsers(data);
    } catch (error) {
      // Handle error
      setError(error.message);
    } finally {
      // Stop loading
      setLoading(false);
    }
  };

  // Call API when page loads
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>API Response Handling</h1>

      {/* 1. Loading State */}
      {loading && <h2>Loading...</h2>}

      {/* 2. Error State */}
      {!loading && error && (
        <div>
          <h2>Error: {error}</h2>

          <button onClick={fetchUsers}>
            Try Again
          </button>
        </div>
      )}

      {/* 3. Empty State */}
      {!loading && !error && users.length === 0 && (
        <h2>No users found.</h2>
      )}

      {/* 4. Success State */}
      {!loading && !error && users.length > 0 && (
        <div>
          <h2>Users</h2>

          {users.map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;