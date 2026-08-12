import { useState } from "react";

function UserForm({ onAddUser }) {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      setError("Please fill all fields");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setError("");

    onAddUser(form);

    setForm({
      name: "",
      email: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>

      <input
        name="name"
        placeholder="Enter name"
        value={form.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
      />

      <br /><br />

      {error && <p>{error}</p>}

      <button type="submit">
        Add User
      </button>
    </form>
  );
}

export default UserForm;