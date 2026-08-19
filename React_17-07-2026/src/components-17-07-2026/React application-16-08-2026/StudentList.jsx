import React from "react";
import Student from "./Student";

function StudentList({ students }) {
  return (
    <div>

      <h2>Student List</h2>

      {students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          age={student.age}
          isPassed={student.isPassed}
        />
      ))}

    </div>
  );
}

export default StudentList;