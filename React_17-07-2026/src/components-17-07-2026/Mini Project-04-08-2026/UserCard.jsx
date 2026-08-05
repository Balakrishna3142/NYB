function UserCard({
  user,
  editUser,
  deleteUser,
  patchUser,
}) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: 10,
        padding: 10,
      }}
    >
      <h3>{user.name}</h3>

      <p>{user.email}</p>

      <button
        onClick={() => editUser(user)}
      >
        Edit
      </button>

      <button
        onClick={() =>
          patchUser(user.id)
        }
      >
        PATCH
      </button>

      <button
        onClick={() =>
          deleteUser(user.id)
        }
      >
        Delete
      </button>
    </div>
  );
}

export default UserCard;