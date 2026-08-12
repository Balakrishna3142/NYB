import React from "react";
import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);