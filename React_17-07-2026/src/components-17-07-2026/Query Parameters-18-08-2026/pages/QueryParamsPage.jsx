import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

function QueryParamsPage() {
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/users?name=Leanne"
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1>Query Parameters Example</h1>

      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={() => {
          fetch(
            `https://jsonplaceholder.typicode.com/users?name=${search}`
          )
            .then((response) => response.json())
            .then((data) => {
              setUsers(data);
            });
        }}
      >
        Search
      </button>

      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}

export default QueryParamsPage;