import StudentProfile from "./StudentProfile"
import StudentMarks from "./StudentMarks"
import StudentAttendance from "./StudentAttendance"

function StudentDashboard() {
  const student = {
    name: "Balu",
    course: "React JS",
    marks: 95,
    attendance: "90%",
  };

  return (
    <div>
      <h2>Student Dashboard</h2>

      <StudentProfile
        name={student.name}
        course={student.course}
      />

      <StudentMarks
        marks={student.marks}
      />

      <StudentAttendance
        attendance={student.attendance}
      />
    </div>
  );
}

export default StudentDashboard