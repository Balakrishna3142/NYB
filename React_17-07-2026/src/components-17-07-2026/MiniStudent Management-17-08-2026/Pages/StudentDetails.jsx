import React from "react";

class StudentDetails extends React.Component {

  render() {

    const path =
      window.location.pathname;

    const id =
      path.split("/").pop();


    const students = {

      1: {
        name: "Ravi",
        age: 21,
        marks: 80
      },

      2: {
        name: "Kiran",
        age: 22,
        marks: 30
      },

      3: {
        name: "Sita",
        age: 20,
        marks: 90
      }

    };


    const student =
      students[id];


    if (!student) {

      return (
        <h2>
          Student Not Found
        </h2>
      );

    }


    return (
      <div>

        <h1>
          Student Details
        </h1>

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

      </div>
    );
  }
}

export default StudentDetails;