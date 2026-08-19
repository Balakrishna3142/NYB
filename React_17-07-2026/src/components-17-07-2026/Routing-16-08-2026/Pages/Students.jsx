import React, {
  useState
} from "react";

import {
  Link
} from "react-router-dom";

import Student
  from "../components/Student";


function Students() {

  const [showStudents, setShowStudents] =
    useState(true);


  const students = [

    {
      id: 1,
      name: "Ravi",
      age: 21,
      marks: 80
    },

    {
      id: 2,
      name: "Kiran",
      age: 22,
      marks: 30
    },

    {
      id: 3,
      name: "Sita",
      age: 20,
      marks: 75
    }

  ];


  return (
    <div>

      <h2>
        Students Page
      </h2>


      <button
        onClick={() =>
          setShowStudents(
            !showStudents
          )
        }
      >
        {showStudents
          ? "Hide Students"
          : "Show Students"}
      </button>


      {showStudents && (

        <div>

          {students.map(
            (student) => (

              <div key={student.id}>

                <Student
                  name={student.name}
                  age={student.age}
                  marks={student.marks}
                />

                <Link
                  to={`/students/${student.id}`}
                >
                  View Details
                </Link>

              </div>

            )
          )}

        </div>

      )}

    </div>
  );
}

export default Students;