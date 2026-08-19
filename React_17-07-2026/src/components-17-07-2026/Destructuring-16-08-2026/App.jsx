import React, { useState } from "react";

// ==========================================
// 1. OBJECT DESTRUCTURING
// ==========================================

function ObjectExample() {
  const student = {
    name: "Ravi",
    age: 20,
    course: "React"
  };

  // Object Destructuring
  const { name, age, course } = student;

  return (
    <div>
      <h2>1. Object Destructuring</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}


// ==========================================
// 2. ARRAY DESTRUCTURING
// ==========================================

function ArrayExample() {
  const numbers = [10, 20, 30];

  // Array Destructuring
  const [first, second, third] = numbers;

  return (
    <div>
      <h2>2. Array Destructuring</h2>

      <p>First: {first}</p>
      <p>Second: {second}</p>
      <p>Third: {third}</p>
    </div>
  );
}


// ==========================================
// 3. PROPS DESTRUCTURING
// ==========================================

function Student({ name, age, course }) {
  return (
    <div>
      <h2>3. Props Destructuring</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}


// ==========================================
// 4. STATE DESTRUCTURING
// ==========================================

function Counter() {

  // useState returns an array
  // Array Destructuring is used here

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>4. State Destructuring</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}


// ==========================================
// 5. DESTRUCTURING IN FUNCTION PARAMETERS
// ==========================================

function DisplayStudent({ name, marks }) {

  return (
    <div>
      <h2>5. Destructuring in Function Parameters</h2>

      <p>Name: {name}</p>
      <p>Marks: {marks}</p>
    </div>
  );
}


// ==========================================
// 6. MAIN APP
// ==========================================

function App() {

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      <h1>JavaScript Destructuring in React</h1>

      <hr />

      {/* Object Destructuring */}
      <ObjectExample />

      <hr />

      {/* Array Destructuring */}
      <ArrayExample />

      <hr />

      {/* Props Destructuring */}
      <Student
        name="Kiran"
        age={21}
        course="React JS"
      />

      <hr />

      {/* State Destructuring */}
      <Counter />

      <hr />

      {/* Function Parameter Destructuring */}
      <DisplayStudent
        name="Sita"
        marks={95}
      />

    </div>
  );
}

export default App;