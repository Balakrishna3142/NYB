import { useEffect, useState } from "react";

import UserForm from "./UserForm";
import UserList from "./UserList";
import withLoading from "./withLoading";

const UserListWithLoading = withLoading(UserList);

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong!");
        setLoading(false);
      });
  }, []);

  const addUser = (newUser) => {
    const user = {
      id: users.length + 1,
      ...newUser
    };

    setUsers([...users, user]);
  };

  return (
    <div>
      <h1>User Management App</h1>

      <UserForm onAddUser={addUser} />

      {error ? (
        <h2>{error}</h2>
      ) : (
        <UserListWithLoading
          isLoading={loading}
          users={users}
        />
      )}
    </div>
  );
}

export default App;