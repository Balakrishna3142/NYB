import React, { useState } from "react";
import StudentList from "./StudentList";

function Home() {

  // State
  const [showStudents, setShowStudents] = useState(true);

  const [count, setCount] = useState(0);


  // List Data
  const students = [
    {
      id: 1,
      name: "Ravi",
      age: 21,
      isPassed: true
    },
    {
      id: 2,
      name: "Kiran",
      age: 22,
      isPassed: false
    },
    {
      id: 3,
      name: "Sita",
      age: 20,
      isPassed: true
    }
  ];


  return (
    <div>

      <h1>React Mini Practice</h1>

      {/* State Example */}
      <h2>Counter: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      {" "}

      <button
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>


      <hr />


      {/* Conditional Rendering */}
      <button
        onClick={() =>
          setShowStudents(!showStudents)
        }
      >
        {showStudents
          ? "Hide Students"
          : "Show Students"}
      </button>


      {/* Conditional Rendering */}
      {showStudents && (
        <StudentList
          students={students}
        />
      )}

    </div>
  );
}

export default Home;