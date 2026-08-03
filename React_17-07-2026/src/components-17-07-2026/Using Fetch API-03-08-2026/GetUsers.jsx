import { useEffect, useState } from "react";

function GetUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        setError("Failed to fetch users");
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>GET Request</h2>

      {error && <p>{error}</p>}

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default GetUsers;