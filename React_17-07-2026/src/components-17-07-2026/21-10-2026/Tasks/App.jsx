
import { useState } from "react";
import "./index.css";

// Child component: receives Props
function StudentCard({ student, onDelete }) {
  return (
    <div className="card">
      <h3>{student.name}</h3>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
      <p>Status: {student.age >= 18 ? "Adult" : "Minor"}</p>

      <button onClick={() => onDelete(student.id)}>
        Delete
      </button>
    </div>
  );
}

// Main parent component
function App() {
  // State: stores student list
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul",
      email: "rahul@gmail.com",
      age: 21,
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@gmail.com",
      age: 22,
    },
  ]);

  // Controlled form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // Conditional rendering state
  const [showStudents, setShowStudents] = useState(true);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Form submit event and validation
  function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (
      age === "" ||
      !Number.isInteger(Number(age)) ||
      Number(age) < 1 ||
      Number(age) > 120
    ) {
      setError("Age must be a whole number from 1 to 120.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      age: Number(age),
    };

    setStudents([...students, newStudent]);

    setName("");
    setEmail("");
    setAge("");
    setMessage("Student added successfully!");
  }

  // Delete student: parent updates state
  function handleDelete(id) {
    setStudents(students.filter((student) => student.id !== id));
    setMessage("Student deleted successfully!");
    setError("");
  }

  return (
    <div className="container">
      {/* JSX and JavaScript expressions */}
      <h1>Student Management System</h1>
      <p>Total Students: {students.length}</p>

      {/* Controlled form */}
      <form onSubmit={handleSubmit}>
        <h2>Add Student</h2>

        <label>Name</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>Age</label>
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>

      {/* Conditional rendering */}
      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}

      <button onClick={() => setShowStudents(!showStudents)}>
        {showStudents ? "Hide Students" : "Show Students"}
      </button>

      {/* Dynamic list using map() */}
      {showStudents && (
        <div>
          <h2>Student List</h2>

          {students.length === 0 ? (
            <p>No students available.</p>
          ) : (
            students.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;
