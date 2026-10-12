import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Async/Await Function
  const fetchUsers = async () => {
    try {
      setLoading(true);

      // Wait for API response
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      // Check response
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      // Wait for JSON data
      const data = await response.json();

      // Store data
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Call function when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Async/Await Example</h1>

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      {!loading &&
        !error &&
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}

export default App;