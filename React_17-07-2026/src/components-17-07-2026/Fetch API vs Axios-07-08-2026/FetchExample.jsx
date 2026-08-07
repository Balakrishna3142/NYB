import { useEffect, useState } from "react";

function FetchExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading Fetch API...</p>;
  }

  return (
    <div>
      <h2>Fetch API Example</h2>

      {users.map((user) => (
        <p key={user.id}>
          {user.id}. {user.name}
        </p>
      ))}
    </div>
  );
}

export default FetchExample;