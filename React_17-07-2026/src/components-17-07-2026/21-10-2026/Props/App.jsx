
import React from "react";

// Child Component with Props Destructuring
function Student({ name, age, course }) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}

// Parent Component
function App() {
  return (
    <div>
      <h1>Welcome to React</h1>

      <Student
        name="Rahul"
        age={20}
        course="React JS"
      />

      <Student
        name="Priya"
        age={21}
        course="JavaScript"
      />
    </div>
  );
}

export default App;
