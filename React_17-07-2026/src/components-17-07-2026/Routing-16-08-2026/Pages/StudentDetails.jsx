import React from "react";

import {
  useParams,
  useNavigate
} from "react-router-dom";


function StudentDetails() {

  const { id } =
    useParams();


  const navigate =
    useNavigate();


  const students = {

    1: {
      name: "bala",
      age: 21,
      marks: 80
    },

    2: {
      name: "Krishna",
      age: 22,
      marks: 30
    },

    3: {
      name: "pavani",
      age: 20,
      marks: 75
    }

  };


  const student =
    students[id];


  if (!student) {

    return (
      <div>

        <h2>
          Student Not Found
        </h2>

        <button
          onClick={() =>
            navigate("/students")
          }
        >
          Back to Students
        </button>

      </div>
    );
  }


  return (
    <div>

      <h2>
        Student Details
      </h2>

      <p>
        ID: {id}
      </p>

      <p>
        Name: {student.name}
      </p>

      <p>
        Age: {student.age}
      </p>

      <p>
        Marks: {student.marks}
      </p>


      {student.marks >= 35 ? (
        <p> Passed</p>
      ) : (
        <p> Failed</p>
      )}


      <button
        onClick={() =>
          navigate("/students")
        }
      >
        Back
      </button>

    </div>
  );
}

export default StudentDetails;