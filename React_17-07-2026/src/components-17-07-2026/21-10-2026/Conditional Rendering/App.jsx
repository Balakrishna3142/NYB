
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", email: "rahul@gmail.com" },
    { id: 2, name: "Priya", email: "priya@gmail.com" },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim()) {
      setError("Please enter your name");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email");
      return;
    }

    setStudents([
      ...students,
      {
        id: Date.now(),
        name: form.name.trim(),
        email: form.email,
      },
    ]);

    setForm({ name: "", email: "" });
    setError("");
  }

  return (
    <div>
      <h1>React Student App</h1>

      <h2>Conditional Rendering</h2>

      {isLoggedIn ? (
        <p>Welcome! You are logged in.</p>
      ) : (
        <p>Please log in.</p>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <hr />

      <h2>Student List</h2>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.email}
          </li>
        ))}
      </ul>

      <hr />

      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter name"
        />

        <br /><br />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        <br /><br />

        <button type="submit">Add Student</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
