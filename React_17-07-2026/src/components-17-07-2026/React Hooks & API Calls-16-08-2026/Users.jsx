import React, { useEffect, useState } from "react";

function Users() {

  // API data
  const [users, setUsers] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");


  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        return response.json();
      })

      .then((data) => {
        setUsers(data);
        setLoading(false);
      })

      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

  }, []);


  // Loading
  if (loading) {
    return (
      <div>
        <h2>Users</h2>
        <p>Loading...</p>
      </div>
    );
  }


  // Error
  if (error) {
    return (
      <div>
        <h2>Users</h2>
        <p>Error: {error}</p>
      </div>
    );
  }


  // Display data
  return (
    <div>

      <h1>User List</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px 0"
          }}
        >

          <h3>{user.name}</h3>

          <p>
            Email: {user.email}
          </p>

          <p>
            City: {user.address.city}
          </p>

        </div>
      ))}

    </div>
  );
}

export default Users;