function UserList({
  users,
  handleEdit,
  handleDelete,
}) {
  return (
    <div>
      <h2>User List</h2>

      {users.length === 0 ? (
        <h3>No users found</h3>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>

            <p>Email: {user.email}</p>

            <p>
              City: {user.address?.city || "No city"}
            </p>

            <button onClick={() => handleEdit(user)}>
              Edit
            </button>

            <button onClick={() => handleDelete(user.id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default UserList;