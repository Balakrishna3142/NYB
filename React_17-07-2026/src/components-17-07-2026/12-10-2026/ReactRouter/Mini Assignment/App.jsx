
import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./index.css";

const initialEmployees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    department: "IT",
    position: "Frontend Developer",
    salary: 45000,
  },
  {
    id: 2,
    name: "Priya Reddy",
    email: "priya@gmail.com",
    department: "HR",
    position: "HR Manager",
    salary: 55000,
  },
  {
    id: 3,
    name: "Arjun Kumar",
    email: "arjun@gmail.com",
    department: "Finance",
    position: "Accountant",
    salary: 40000,
  },
];

const readStorage = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

// LOGIN PAGE
function Login() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard", { replace: true });
    } else {
      setError("Invalid username or password.");
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <div className="logo">EMP</div>
        <h1>Employee Portal</h1>
        <p className="muted">Sign in to manage your employees</p>

        <label>Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="username"
          placeholder="Enter username"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          placeholder="Enter password"
        />

        {error && <p className="error">{error}</p>}

        <button className="primary full" type="submit">
          Login
        </button>

        <p className="hint">
          Demo login: admin / admin123
        </p>
      </form>
    </div>
  );
}

// PROTECTED ROUTE
function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

// MAIN LAYOUT
function Layout({ employees }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login", { replace: true });
  }

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2 className="brand">EMP Portal</h2>
        <p className="sidebar-label">MAIN MENU</p>

        <Link to="/dashboard">▦ Dashboard</Link>
        <Link to="/employees">♙ Employees</Link>
        <Link to="/employees/add">＋ Add Employee</Link>

        <button className="logout" onClick={logout}>
          ↪ Logout
        </button>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <span>Employee Management System</span>
          <span className="admin-badge">Admin</span>
        </header>

        <main className="content">
          <Outlet context={{ employees }} />
        </main>
      </div>
    </div>
  );
}

// DASHBOARD
function Dashboard() {
  const { employees } = React.useOutletContext();

  const departments = new Set(
    employees.map((employee) => employee.department)
  ).size;

  const totalSalary = employees.reduce(
    (total, employee) => total + Number(employee.salary || 0),
    0
  );

  return (
    <>
      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p className="muted">Welcome to your employee management portal.</p>
        </div>
        <Link className="primary button-link" to="/employees/add">
          + Add Employee
        </Link>
      </div>

      <div className="stats-grid">
        <Stat title="Total Employees" value={employees.length} icon="♙" />
        <Stat title="Departments" value={departments} icon="▦" />
        <Stat
          title="Monthly Payroll"
          value={"₹" + totalSalary.toLocaleString("en-IN")}
          icon="₹"
        />
      </div>

      <section className="panel">
        <div className="panel-heading">
          <h2>Recent Employees</h2>
          <Link to="/employees">View all →</Link>
        </div>

        <EmployeeTable employees={employees.slice(-5).reverse()} />
      </section>
    </>
  );
}

function Stat({ title, value, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

// REUSABLE EMPLOYEE TABLE
function EmployeeTable({ employees, onDelete }) {
  if (employees.length === 0) {
    return <p className="empty">No employees found.</p>;
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <div className="employee-name">{employee.name}</div>
                <small>{employee.email}</small>
              </td>
              <td>{employee.department}</td>
              <td>{employee.position}</td>
              <td>₹{Number(employee.salary).toLocaleString("en-IN")}</td>
              <td>
                <div className="actions">
                  <Link
                    className="action-link"
                    to={`/employees/${employee.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="action-link"
                    to={`/employees/${employee.id}/edit`}
                  >
                    Edit
                  </Link>
                  {onDelete && (
                    <button
                      className="delete-link"
                      onClick={() => onDelete(employee.id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// EMPLOYEE LIST
function EmployeeList() {
  const { employees, setEmployees } = React.useContext(EmployeeContext);
  const [search, setSearch] = useState("");

  const filtered = employees.filter((employee) =>
    `${employee.name} ${employee.email} ${employee.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  function deleteEmployee(id) {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees((previous) =>
        previous.filter((employee) => employee.id !== id)
      );
    }
  }

  return (
    <>
      <div className="page-heading">
        <div>
          <h1>Employees</h1>
          <p className="muted">View and manage all employee records.</p>
        </div>
        <Link className="primary button-link" to="/employees/add">
          + Add Employee
        </Link>
      </div>

      <section className="panel">
        <input
          className="search"
          placeholder="Search name, email or department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <EmployeeTable employees={filtered} onDelete={deleteEmployee} />
      </section>
    </>
  );
}

// ADD / EDIT EMPLOYEE FORM
function EmployeeForm() {
  const { employees, setEmployees } = React.useContext(EmployeeContext);
  const { id } = useParams();
  const editing = Boolean(id);
  const navigate = useNavigate();

  const existing = employees.find((employee) => employee.id === Number(id));

  const [form, setForm] = useState(() => ({
    name: existing?.name || "",
    email: existing?.email || "",
    department: existing?.department || "IT",
    position: existing?.position || "",
    salary: existing?.salary ?? "",
  }));

  const [error, setError] = useState("");

  useEffect(() => {
    if (editing && !existing) {
      navigate("/employees", { replace: true });
    }
  }, [editing, existing, navigate]);

  function updateField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const duplicate = employees.some(
      (employee) =>
        employee.email.toLowerCase() === form.email.trim().toLowerCase() &&
        employee.id !== Number(id)
    );

    if (duplicate) {
      setError("An employee with this email already exists.");
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.position.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (form.salary === "" || Number(form.salary) < 0) {
      setError("Enter a valid, non-negative salary.");
      return;
    }

    const employee = {
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      position: form.position.trim(),
      salary: Number(form.salary),
    };

    if (editing) {
      setEmployees((previous) =>
        previous.map((item) =>
          item.id === Number(id) ? { ...employee, id: Number(id) } : item
        )
      );
    } else {
      setEmployees((previous) => [
        ...previous,
        { ...employee, id: Date.now() },
      ]);
    }

    navigate("/employees");
  }

  if (editing && !existing) return null;

  return (
    <>
      <div className="page-heading">
        <div>
          <h1>{editing ? "Edit Employee" : "Add Employee"}</h1>
          <p className="muted">
            {editing
              ? "Update employee information."
              : "Enter the employee's information below."}
          </p>
        </div>
      </div>

      <form className="panel employee-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <Field
            label="Full Name"
            name="name"
            value={form.name}
            onChange={updateField}
            required
          />
          <Field
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            required
          />

          <div className="field">
            <label>Department *</label>
            <select
              name="department"
              value={form.department}
              onChange={updateField}
              required
            >
              <option>IT</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Marketing</option>
              <option>Sales</option>
              <option>Operations</option>
            </select>
          </div>

          <Field
            label="Position"
            name="position"
            value={form.position}
            onChange={updateField}
            required
          />
          <Field
            label="Monthly Salary (₹)"
            name="salary"
            type="number"
            value={form.salary}
            onChange={updateField}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <div className="form-actions">
          <button
            type="button"
            className="secondary"
            onClick={() => navigate("/employees")}
          >
            Cancel
          </button>
          <button type="submit" className="primary">
            {editing ? "Save Changes" : "Add Employee"}
          </button>
        </div>
      </form>
    </>
  );
}

function Field({ label, name, value, onChange, type = "text", required }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        min={type === "number" ? 0 : undefined}
      />
    </div>
  );
}

// EMPLOYEE DETAILS
function EmployeeDetails() {
  const { employees } = React.useContext(EmployeeContext);
  const { id } = useParams();

  const employee = employees.find((item) => item.id === Number(id));

  if (!employee) {
    return (
      <section className="panel">
        <h2>Employee not found</h2>
        <Link to="/employees">Back to employees</Link>
      </section>
    );
  }

  return (
    <>
      <div className="page-heading">
        <div>
          <h1>Employee Details</h1>
          <p className="muted">View the employee's profile.</p>
        </div>
        <Link className="primary button-link" to={`/employees/${id}/edit`}>
          Edit Employee
        </Link>
      </div>

      <section className="panel detail-card">
        <div className="profile-avatar">
          {employee.name.charAt(0).toUpperCase()}
        </div>
        <h2>{employee.name}</h2>
        <p className="muted">{employee.position}</p>

        <div className="details-grid">
          <Detail label="Employee ID" value={employee.id} />
          <Detail label="Email" value={employee.email} />
          <Detail label="Department" value={employee.department} />
          <Detail label="Position" value={employee.position} />
          <Detail
            label="Monthly Salary"
            value={`₹${Number(employee.salary).toLocaleString("en-IN")}`}
          />
        </div>

        <Link to="/employees" className="secondary button-link">
          Back to Employees
        </Link>
      </section>
    </>
  );
}

function Detail({ label, value }) {
  return (
    <div className="detail-item">
      <small>{label}</small>
      <strong>{value}</strong>
    </div>
  );
}

// 404 PAGE
function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/dashboard" className="primary button-link">
        Back to Dashboard
      </Link>
    </div>
  );
}

// SHARED EMPLOYEE STATE
const EmployeeContext = React.createContext(null);

// APPLICATION
function AppContent() {
  const [employees, setEmployees] = useState(() =>
    readStorage("employees", initialEmployees)
  );

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route
            element={<Layout employees={employees} />}
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/add" element={<EmployeeForm />} />
            <Route
              path="/employees/:id/edit"
              element={<EmployeeForm />}
            />
            <Route
              path="/employees/:id"
              element={<EmployeeDetails />}
            />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </EmployeeContext.Provider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
