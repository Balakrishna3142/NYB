import { useState } from "react";

function PromiseChainFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = () => {
    setLoading(true);
    setError("");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Promise Chaining API Call</h2>

      <button onClick={fetchUsers}>Load Users</button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading &&
        !error &&
        users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))}
    </div>
  );
}

export default PromiseChainFetch;