import { useEffect, useState } from "react";
import axios from "axios";

function GetUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div>
      <h2>GET Request</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default GetUsers;