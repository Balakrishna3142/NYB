function Users({ users }) {
  return (
    <div>
      <h2>Users List</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;