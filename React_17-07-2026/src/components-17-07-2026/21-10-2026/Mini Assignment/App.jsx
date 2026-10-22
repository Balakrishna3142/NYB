
import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", email: "rahul@gmail.com", age: 20, course: "React" },
    { id: 2, name: "Priya", email: "priya@gmail.com", age: 21, course: "Java" },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
  });

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  // Handle input changes
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Add or update student
  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() ||
        !form.age || !form.course.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (Number(form.age) < 1 || Number(form.age) > 120) {
      setError("Please enter a valid age.");
      return;
    }

    if (
      students.some(
        (s) =>
          s.email.toLowerCase() === form.email.trim().toLowerCase() &&
          s.id !== editId
      )
    ) {
      setError("This email already exists.");
      return;
    }

    const data = {
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      age: Number(form.age),
      id: editId ?? Date.now(),
    };

    if (editId !== null) {
      setStudents(
        students.map((s) => (s.id === editId ? data : s))
      );
      if (selected?.id === editId) setSelected(data);
    } else {
      setStudents([...students, data]);
    }

    resetForm();
  }

  // Reset form
  function resetForm() {
    setForm({ name: "", email: "", age: "", course: "" });
    setEditId(null);
    setError("");
  }

  // Edit student
  function handleEdit(student) {
    setForm({
      name: student.name,
      email: student.email,
      age: String(student.age),
      course: student.course,
    });
    setEditId(student.id);
    setError("");
    setSelected(null);
  }

  // Delete student
  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((s) => s.id !== id));
      if (selected?.id === id) setSelected(null);
      if (editId === id) resetForm();
    }
  }

  // Search students
  const filteredStudents = students.filter((s) =>
    `${s.name} ${s.email} ${s.course}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1>Student Management System</h1>

      {/* Add / Edit Student Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>{editId !== null ? "Edit Student" : "Add Student"}</h2>

        <input
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="age"
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />

        <input
          name="course"
          placeholder="Course"
          value={form.course}
          onChange={handleChange}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">
          {editId !== null ? "Update Student" : "Add Student"}
        </button>

        {editId !== null && (
          <button type="button" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      {/* Search */}
      <input
        style={styles.search}
        placeholder="Search by name, email or course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Student List */}
      <h2>Student List</h2>

      {filteredStudents.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => setSelected(student)}
                  >
                    View
                  </button>

                  <button
                    type="button"
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Student Details */}
      {selected && (
        <div style={styles.details}>
          <h2>Student Details</h2>
          <p><b>ID:</b> {selected.id}</p>
          <p><b>Name:</b> {selected.name}</p>
          <p><b>Email:</b> {selected.email}</p>
          <p><b>Age:</b> {selected.age}</p>
          <p><b>Course:</b> {selected.course}</p>
          <button type="button" onClick={() => setSelected(null)}>
            Close Details
          </button>
        </div>
      )}
    </div>
  );
}

// Reusable styling
const styles = {
  container: {
    maxWidth: "1000px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    background: "#f4f4f4",
    borderRadius: "8px",
  },
  search: {
    width: "95%",
    padding: "10px",
    marginTop: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  },
  details: {
    marginTop: "25px",
    padding: "20px",
    background: "#eaf2ff",
    borderRadius: "8px",
  },
};

export default App;
