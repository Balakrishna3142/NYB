import React from "react";

function UserList({ users }) {
  console.log("UserList rendered");

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default React.memo(UserList);