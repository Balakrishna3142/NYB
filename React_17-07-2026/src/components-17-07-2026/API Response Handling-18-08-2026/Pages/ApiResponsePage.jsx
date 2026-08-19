import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

function ApiResponsePage() {
  const [users, setUsers] = useState([]);
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
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return (
      <div>
        <h2>Error: {error}</h2>

        <button onClick={fetchUsers}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>API Response Handling</h1>

      <p>Total Users: {users.length}</p>

      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}

export default ApiResponsePage;