import React from "react";

function App() {
  const students = [
    { id: 1, name: "Ravi", age: 20, course: "React" },
    { id: 2, name: "Kiran", age: 21, course: "JavaScript" },
    { id: 3, name: "Suresh", age: 22, course: "Node.js" },
    { id: 4, name: "Anil", age: 20, course: "React" },
  ];

  return (
    <div>
      <h1>Student List</h1>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;