import React from "react";

function App() {

  // ==========================================
  // 1. SIMPLE LIST
  // ==========================================

  const students = [
    { id: 1, name: "Ravi", marks: 85 },
    { id: 2, name: "Kiran", marks: 65 },
    { id: 3, name: "Sita", marks: 45 },
    { id: 4, name: "Arjun", marks: 90 }
  ];


  // ==========================================
  // 2. NESTED LIST
  // ==========================================

  const departments = [
    {
      id: 1,
      name: "CSE",
      students: [
        { id: 101, name: "Ravi" },
        { id: 102, name: "Kiran" }
      ]
    },

    {
      id: 2,
      name: "ECE",
      students: [
        { id: 103, name: "Sita" },
        { id: 104, name: "Arjun" }
      ]
    }
  ];


  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      <h1>React List Rendering Examples</h1>

      {/* ========================================
          1. DYNAMIC LIST USING map()
         ======================================== */}

      <h2>1. Dynamic List using map()</h2>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
          </li>
        ))}
      </ul>


      <hr />


      {/* ========================================
          2. KEY PROP
         ======================================== */}

      <h2>2. Using key Prop</h2>

      {students.map((student) => (
        <div key={student.id}>
          <p>
            ID: {student.id} <br />
            Name: {student.name}
          </p>
        </div>
      ))}


      <hr />


      {/* ========================================
          3. CONDITIONAL RENDERING IN LIST
         ======================================== */}

      <h2>3. Conditional Rendering in List</h2>

      <ul>
        {students.map((student) => (
          <li key={student.id}>

            {student.name} - {student.marks} Marks -

            {student.marks >= 50 ? (
              <strong> Pass</strong>
            ) : (
              <strong> Fail</strong>
            )}

          </li>
        ))}
      </ul>


      <hr />


      {/* ========================================
          4. NESTED LIST
         ======================================== */}

      <h2>4. Nested Lists</h2>

      {departments.map((department) => (

        <div key={department.id}>

          <h3>
            Department: {department.name}
          </h3>

          <ul>

            {department.students.map((student) => (

              <li key={student.id}>
                {student.name}
              </li>

            ))}

          </ul>

        </div>

      ))}


      <hr />


      {/* ========================================
          5. CONDITIONAL RENDERING
             INSIDE NESTED LIST
         ======================================== */}

      <h2>5. Conditional Rendering in Nested List</h2>

      {departments.map((department) => (

        <div key={department.id}>

          <h3>{department.name}</h3>

          {department.students.length > 0 ? (

            <ul>

              {department.students.map((student) => (

                <li key={student.id}>
                  {student.name} - Available
                </li>

              ))}

            </ul>

          ) : (

            <p>No students available</p>

          )}

        </div>

      ))}

    </div>
  );
}

export default App;