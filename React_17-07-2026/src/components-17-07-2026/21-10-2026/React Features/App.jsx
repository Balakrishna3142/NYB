
import { useState } from "react";


function StudentCard({ name, course }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Course: {course}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const students = [
    { id: 1, name: "Rahul", course: "React" },
    { id: 2, name: "Priya", course: "JavaScript" },
    { id: 3, name: "Arun", course: "HTML & CSS" },
  ];

  return (
    <div className="container">
      <h1>React Features Demo</h1>

      {/* JSX and State */}
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      {/* Conditional Rendering */}
      <h2>Show Students</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Students" : "Show Students"}
      </button>

      {/* Lists, Keys, Components and Props */}
      {show && (
        <div>
          {students.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              course={student.course}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
