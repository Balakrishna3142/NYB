import React from "react";

function UserCard({ user }) {
  if (!user) {
    return <h3>User data not available</h3>;
  }

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
}

export default UserCard;