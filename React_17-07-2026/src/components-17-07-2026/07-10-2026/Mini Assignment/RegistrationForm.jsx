import { useState, useEffect } from "react";

function RegistrationForm({ onAddUser, editingUser, onUpdateUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  // When editingUser changes, fill the form
  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setAge(editingUser.age);
    } else {
      setName("");
      setEmail("");
      setAge("");
    }
  }, [editingUser]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (!name || !email || !age) {
      setError("All fields are required");
      return;
    }

    if (age < 18) {
      setError("Age must be 18 or above");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    setError("");

    const user = {
      name,
      email,
      age,
    };

    if (editingUser) {
      onUpdateUser({
        ...editingUser,
        ...user,
      });
    } else {
      onAddUser(user);
    }

    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div>
      <h2>{editingUser ? "Edit User" : "User Registration"}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>

        <br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">
          {editingUser ? "Update User" : "Register User"}
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;