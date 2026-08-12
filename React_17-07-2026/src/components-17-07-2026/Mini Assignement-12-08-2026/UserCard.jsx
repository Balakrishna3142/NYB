import React from "react";

function UserCard({ user }) {
  console.log("UserCard rendered:", user.name);

  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <hr />
    </div>
  );
}

export default React.memo(UserCard);