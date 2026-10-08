function UserList({ users, onEdit, onDelete }) {
  return (
    <div>
      <h2>User List</h2>

      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>

                <td>
                  <button onClick={() => onEdit(user)}>
                    Edit
                  </button>

                  <button onClick={() => onDelete(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserList;