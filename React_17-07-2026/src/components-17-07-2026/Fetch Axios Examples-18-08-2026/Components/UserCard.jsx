function UserCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{user.name}</h3>

      <p>Email: {user.email}</p>

      <p>Phone: {user.phone}</p>

      <p>City: {user.address.city}</p>
    </div>
  );
}

export default UserCard;