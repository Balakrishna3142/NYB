
import { useState, useEffect } from "react";

// Component and Props
function Student({ name }) {
  return <h3>Student Name: {name}</h3>;
}

function App() {
  // State and useState
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [students, setStudents] = useState(["Ravi", "Sita"]);

  // API state
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect and API calls
  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchUsers();

    return () => controller.abort();
  }, []);

  // Form handling
  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) return;

    setStudents((prev) => [...prev, name.trim()]);
    setName("");
  }

  // JSX and UI
  return (
    <div>
      <h1>React Revision Program</h1>

      {/* Props */}
      <Student name="Ravi" />

      <hr />

      {/* State, useState and event handling */}
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <hr />

      {/* Forms */}
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>

      <hr />

      {/* List rendering */}
      <h2>Student List</h2>

      <ul>
        {students.map((student, index) => (
          <li key={`${student}-${index}`}>{student}</li>
        ))}
      </ul>

      <hr />

      {/* API calls and conditional rendering */}
      <h2>Users from API</h2>

      {loading && <p>Loading users...</p>}

      {!loading && error && <p>Error: {error}</p>}

      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
