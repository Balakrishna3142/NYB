function UserForm({
  name,
  email,
  setName,
  setEmail,
  handleSubmit,
  editingId,
  cancelEdit,
}) {
  return (
    <div>
      <h2>{editingId ? "Edit User" : "Add User"}</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editingId ? "Update User" : "Add User"}
      </button>

      {editingId && (
        <button onClick={cancelEdit}>
          Cancel
        </button>
      )}
    </div>
  );
}

export default UserForm;