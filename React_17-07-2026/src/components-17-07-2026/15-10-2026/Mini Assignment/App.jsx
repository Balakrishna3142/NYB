
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  Component,
} from "react";

// 1. Centralized employee state
const EmployeeContext = createContext();

// 2. Reusable Button component
function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "8px 14px",
        margin: "5px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

// 3. Reusable Input component
function Input(props) {
  return (
    <input
      {...props}
      style={{
        padding: "10px",
        margin: "5px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    />
  );
}

// 4. Reusable Table component
function EmployeeTable({ employees, onDelete }) {
  return (
    <table
      width="100%"
      cellPadding="10"
      style={{ borderCollapse: "collapse" }}
    >
      <thead>
        <tr style={{ background: "#e5e7eb" }}>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.department}</td>
            <td>
              <Button onClick={() => onDelete(employee.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// 5. Custom hook for employee data
function useEmployees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rahul",
      email: "rahul@example.com",
      department: "IT",
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@example.com",
      department: "HR",
    },
  ]);

  const addEmployee = (employee) => {
    setEmployees((previous) => [
      ...previous,
      { ...employee, id: Date.now() },
    ]);
  };

  const deleteEmployee = (id) => {
    setEmployees((previous) =>
      previous.filter((employee) => employee.id !== id)
    );
  };

  return { employees, addEmployee, deleteEmployee };
}

// 6. Context provider for shared state
function EmployeeProvider({ children }) {
  const employeeState = useEmployees();

  return (
    <EmployeeContext.Provider value={employeeState}>
      {children}
    </EmployeeContext.Provider>
  );
}

// 7. Reusable error boundary
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please reload.</h2>;
    }

    return this.props.children;
  }
}

// 8. Employee form and main page
function EmployeePortal() {
  const { employees, addEmployee, deleteEmployee } =
    useContext(EmployeeContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !department.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    addEmployee({
      name: name.trim(),
      email: email.trim(),
      department: department.trim(),
    });

    setName("");
    setEmail("");
    setDepartment("");
    setError("");
  }

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "30px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Employee Management Portal</h1>

      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <Button type="submit">Add Employee</Button>
      </form>

      {error && <p role="alert" style={{ color: "red" }}>{error}</p>}

      <h2>Employee List ({employees.length})</h2>

      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <EmployeeTable
          employees={employees}
          onDelete={deleteEmployee}
        />
      )}
    </div>
  );
}

// 9. Main application
export default function App() {
  return (
    <ErrorBoundary>
      <EmployeeProvider>
        <EmployeePortal />
      </EmployeeProvider>
    </ErrorBoundary>
  );
}
