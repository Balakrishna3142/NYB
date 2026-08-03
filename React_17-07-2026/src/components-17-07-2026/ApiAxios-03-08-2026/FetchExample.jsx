import { useEffect, useState } from "react";

function FetchExample() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div>
      <h2>Fetch API</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default FetchExample;