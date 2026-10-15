
import React, {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";

// 1. Initial centralized state
const initialState = {
  students: [],
  nextId: 1,
};

// 2. Reducer function
function studentReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        students: [
          ...state.students,
          {
            id: state.nextId,
            name: action.payload.name,
            course: action.payload.course,
          },
        ],
        nextId: state.nextId + 1,
      };

    case "UPDATE":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id
            ? {
                ...student,
                name: action.payload.name,
                course: action.payload.course,
              }
            : student
        ),
      };

    case "DELETE":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

// 3. Create Context
const StudentContext = createContext(null);

// 4. Context Provider
function StudentProvider({ children }) {
  const [state, dispatch] = useReducer(
    studentReducer,
    initialState
  );

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
}

// 5. Custom hook
function useStudents() {
  const context = useContext(StudentContext);

  if (context === null) {
    throw new Error("Use inside StudentProvider");
  }

  return context;
}

// 6. Add Student Form
function StudentForm() {
  const { dispatch } = useStudents();

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !course.trim()) return;

    dispatch({
      type: "ADD",
      payload: {
        name: name.trim(),
        course: course.trim(),
      },
    });

    setName("");
    setCourse("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Student name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <input
        placeholder="Course"
        value={course}
        onChange={(event) => setCourse(event.target.value)}
        required
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

// 7. Display, Update and Delete Students
function StudentList() {
  const { state, dispatch } = useStudents();

  function updateStudent(student) {
    const name = prompt("Enter new student name:", student.name);
    if (name === null || !name.trim()) return;

    const course = prompt("Enter new course:", student.course);
    if (course === null || !course.trim()) return;

    dispatch({
      type: "UPDATE",
      payload: {
        id: student.id,
        name: name.trim(),
        course: course.trim(),
      },
    });
  }

  return (
    <div>
      <h2>Student Records</h2>

      <p>Total Students: {state.students.length}</p>

      <button
        type="button"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset All
      </button>

      {state.students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <ul>
          {state.students.map((student) => (
            <li key={student.id}>
              <strong>{student.name}</strong>
              {" — "}
              {student.course}

              {" "}
              <button
                type="button"
                onClick={() => updateStudent(student)}
              >
                Update
              </button>

              <button
                type="button"
                onClick={() =>
                  dispatch({
                    type: "DELETE",
                    payload: student.id,
                  })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// 8. Main Application
function AppContent() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Student Management System</h1>
      <StudentForm />
      <StudentList />
    </div>
  );
}

// 9. Wrap app with Provider
export default function App() {
  return (
    <StudentProvider>
      <AppContent />
    </StudentProvider>
  );
}
