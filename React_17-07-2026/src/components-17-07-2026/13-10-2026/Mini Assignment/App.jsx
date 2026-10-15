
import React, {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Initial employee data
const initialEmployees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    department: "IT",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Reddy",
    email: "priya@gmail.com",
    department: "HR",
    status: "Active",
  },
  {
    id: 3,
    name: "Arjun Kumar",
    email: "arjun@gmail.com",
    department: "Finance",
    status: "Inactive",
  },
];

// Central state
const EmployeeContext = createContext();

function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.map((emp) =>
        emp.id === action.payload.id
          ? { ...emp, ...action.payload }
          : emp
      );

    case "DELETE":
      return state.filter((emp) => emp.id !== action.payload);

    case "STATUS":
      return state.map((emp) =>
        emp.id === action.payload.id
          ? { ...emp, status: action.payload.status }
          : emp
      );

    default:
      return state;
  }
}

// Context provider
function EmployeeProvider({ children }) {
  const [employees, dispatch] = useReducer(
    employeeReducer,
    initialEmployees
  );

  return (
    <EmployeeContext.Provider value={{ employees, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
}

// Dashboard shares the same employee state
function Dashboard() {
  const { employees } = useContext(EmployeeContext);

  const active = employees.filter(
    (e) => e.status === "Active"
  ).length;

  return (
    <div className="dashboard">
      <div className="stat">
        <h3>Total Employees</h3>
        <h2>{employees.length}</h2>
      </div>
      <div className="stat">
        <h3>Active</h3>
        <h2>{active}</h2>
      </div>
      <div className="stat">
        <h3>Inactive</h3>
        <h2>{employees.length - active}</h2>
      </div>
    </div>
  );
}

// Main application
function App() {
  const { employees, dispatch } = useContext(EmployeeContext);

  const emptyForm = {
    name: "",
    email: "",
    department: "IT",
    status: "Active",
  };

  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  function handleSubmit(e) {
    e.preventDefault();

    if (editId !== null) {
      dispatch({
        type: "UPDATE",
        payload: { ...form, id: editId },
      });
    } else {
      dispatch({
        type: "ADD",
        payload: { ...form, id: Date.now() },
      });
    }

    setForm(emptyForm);
    setEditId(null);
  }

  function handleEdit(employee) {
    setForm({
      name: employee.name,
      email: employee.email,
      department: employee.department,
      status: employee.status,
    });
    setEditId(employee.id);
  }

  function handleDelete(id) {
    if (window.confirm("Delete this employee?")) {
      dispatch({ type: "DELETE", payload: id });

      if (editId === id) {
        setEditId(null);
        setForm(emptyForm);
      }
    }
  }

  const filteredEmployees = employees.filter((emp) => {
    const query = search.toLowerCase().trim();

    return (
      (emp.name.toLowerCase().includes(query) ||
        emp.email.toLowerCase().includes(query)) &&
      (department === "All" || emp.department === department) &&
      (statusFilter === "All" || emp.status === statusFilter)
    );
  });

  return (
    <div className="container">
      <h1>Employee Management Portal</h1>

      <Dashboard />

      <form onSubmit={handleSubmit} className="employee-form">
        <h2>{editId !== null ? "Update Employee" : "Add Employee"}</h2>

        <input
          placeholder="Employee Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <input
          type="email"
          placeholder="Employee Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <select
          value={form.department}
          onChange={(e) =>
            setForm({ ...form, department: e.target.value })
          }
        >
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Sales">Sales</option>
        </select>

        <select
          value={form.status}
          onChange={(e) =>
            setForm({ ...form, status: e.target.value })
          }
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button type="submit">
          {editId !== null ? "Save Changes" : "Add Employee"}
        </button>

        {editId !== null && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setForm(emptyForm);
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <h2>Employee List</h2>

      <div className="filters">
        <input
          placeholder="Search name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Sales">Sales</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>
                  <select
                    value={emp.status}
                    onChange={(e) =>
                      dispatch({
                        type: "STATUS",
                        payload: {
                          id: emp.id,
                          status: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => handleEdit(emp)}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan="5">No employees found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Render application
createRoot(document.getElementById("root")).render(
  <EmployeeProvider>
    <App />
  </EmployeeProvider>
);
