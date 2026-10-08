import React from "react";

function App() {
  const students = [
    { id: 1, name: "Ravi", age: 20 },
    { id: 2, name: "Kiran", age: 21 },
    { id: 3, name: "Anu", age: 19 },
  ];

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
        </div>
      ))}
    </div>
  );
}

export default App;