import React from "react";

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    >
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>

      <button onClick={() => onEdit(user)}>Edit</button>

      <button
        onClick={() => onDelete(user.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
};

export default UserCard;