
import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
  lazy,
  Suspense,
} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

// ---------- CONTEXT API ----------
const EmployeeContext = createContext();
const AuthContext = createContext();

const initialEmployees = [
  { id: 101, name: "Rahul Sharma", email: "rahul@gmail.com", department: "IT", role: "Developer", status: "Active" },
  { id: 102, name: "Priya Reddy", email: "priya@gmail.com", department: "HR", role: "Manager", status: "Active" },
  { id: 103, name: "Arjun Kumar", email: "arjun@gmail.com", department: "Finance", role: "Accountant", status: "Inactive" },
];

// ---------- REDUCER ----------
function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((e) =>
        e.id === action.payload.id ? action.payload : e
      );
    case "DELETE":
      return state.filter((e) => e.id !== action.payload);
    default:
      return state;
  }
}

// ---------- CUSTOM HOOK ----------
function useEmployees() {
  return useContext(EmployeeContext);
}

function useAuth() {
  return useContext(AuthContext);
}

// ---------- COMMON STYLES ----------
const inputStyle = {
  padding: 10,
  width: "100%",
  margin: "7px 0 14px",
  boxSizing: "border-box",
  border: "1px solid #ccc",
  borderRadius: 5,
};

const buttonStyle = {
  padding: "9px 14px",
  margin: 4,
  border: 0,
  borderRadius: 5,
  cursor: "pointer",
  background: "#2563eb",
  color: "white",
};

function Layout({ children }) {
  const { logout } = useAuth();

  return (
    <div style={{ fontFamily: "Arial", minHeight: "100vh", background: "#f3f4f6" }}>
      <header style={{ background: "#172554", color: "white", padding: 18 }}>
        <strong>Employee Management Portal</strong>
        <button
          onClick={logout}
          style={{ ...buttonStyle, float: "right", background: "#dc2626" }}
        >
          Logout
        </button>
      </header>

      <nav style={{ background: "white", padding: 15 }}>
        <Link to="/dashboard">Dashboard</Link>{" | "}
        <Link to="/employees">Employees</Link>{" | "}
        <Link to="/employees/new">Add Employee</Link>
      </nav>

      <main style={{ padding: 24, maxWidth: 1000, margin: "auto" }}>
        {children}
      </main>
    </div>
  );
}

// ---------- PROTECTED ROUTE ----------
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Layout>{children}</Layout>;
}

// ---------- LOGIN ----------
function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  if (user) return <Navigate to="/dashboard" replace />;

  function handleSubmit(e) {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      login(username);
      navigate(location.state?.from?.pathname || "/dashboard", {
        replace: true,
      });
    } else {
      setError("Invalid username or password.");
    }
  }

  return (
    <div style={{ maxWidth: 350, margin: "100px auto", background: "white", padding: 25, borderRadius: 10 }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input style={inputStyle} value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label>Password</label>
        <input style={inputStyle} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button style={buttonStyle} type="submit">Login</button>
      </form>
      <small>Demo: admin / admin123</small>
    </div>
  );
}

// ---------- DASHBOARD ----------
function Dashboard() {
  const employees = useEmployees();

  return (
    <>
      <h2>Dashboard</h2>
      <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
        {[
          ["Total Employees", employees.length],
          ["Active Employees", employees.filter(e => e.status === "Active").length],
          ["Departments", new Set(employees.map(e => e.department)).size],
        ].map(([label, count]) => (
          <div key={label} style={{ background: "white", padding: 25, borderRadius: 8, minWidth: 150, flex: 1 }}>
            <p>{label}</p>
            <h2>{count}</h2>
          </div>
        ))}
      </div>
      <h3>Welcome to the Employee Portal</h3>
      <p>Manage employee records, departments, roles, and statuses.</p>
    </>
  );
}

// ---------- EMPLOYEE LIST, SEARCH AND FILTER ----------
function EmployeeList() {
  const employees = useEmployees();
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const navigate = useNavigate();

  const filtered = employees.filter((e) =>
    (e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.email.toLowerCase().includes(search.toLowerCase()) ||
      String(e.id).includes(search)) &&
    (department === "All" || e.department === department)
  );

  return (
    <>
      <h2>Employee List</h2>

      <input
        style={{ ...inputStyle, maxWidth: 350 }}
        placeholder="Search name, email, or ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        style={{ ...inputStyle, maxWidth: 200 }}
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option>All</option>
        <option>IT</option>
        <option>HR</option>
        <option>Finance</option>
        <option>Marketing</option>
      </select>

      <button style={buttonStyle} onClick={() => navigate("/employees/new")}>
        + Add Employee
      </button>

      <div style={{ overflowX: "auto", background: "white", marginTop: 15 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 650 }}>
          <thead>
            <tr style={{ background: "#dbeafe" }}>
              {["ID", "Name", "Email", "Department", "Status", "Actions"].map(h =>
                <th key={h} style={{ padding: 12, textAlign: "left" }}>{h}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filtered.map((e) => (
              <tr key={e.id}>
                <td style={{ padding: 12 }}>{e.id}</td>
                <td style={{ padding: 12 }}>{e.name}</td>
                <td style={{ padding: 12 }}>{e.email}</td>
                <td style={{ padding: 12 }}>{e.department}</td>
                <td style={{ padding: 12 }}>{e.status}</td>
                <td style={{ padding: 12 }}>
                  <button style={buttonStyle} onClick={() => navigate(`/employees/${e.id}`)}>View</button>
                  <button style={buttonStyle} onClick={() => navigate(`/employees/${e.id}/edit`)}>Edit</button>
                  <button
                    style={{ ...buttonStyle, background: "#dc2626" }}
                    onClick={() => {
                      if (window.confirm("Delete this employee?")) {
                        employees.dispatch({ type: "DELETE", payload: e.id });
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && <p style={{ padding: 15 }}>No employees found.</p>}
      </div>
    </>
  );
}

// ---------- ADD / EDIT EMPLOYEE ----------
function EmployeeForm({ editing = false }) {
  const { employees, dispatch } = useEmployees();
  const { id } = useParams();
  const navigate = useNavigate();
  const existing = employees.find(e => e.id === Number(id));

  const [name, setName] = useState(existing?.name || "");
  const [email, setEmail] = useState(existing?.email || "");
  const [department, setDepartment] = useState(existing?.department || "IT");
  const [role, setRole] = useState(existing?.role || "");
  const [status, setStatus] = useState(existing?.status || "Active");
  const [error, setError] = useState("");

  if (editing && !existing) {
    return <p>Employee not found. <Link to="/employees">Back to list</Link></p>;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !role.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    const duplicate = employees.some(
      employee => employee.email.toLowerCase() === email.trim().toLowerCase()
        && employee.id !== existing?.id
    );

    if (duplicate) {
      setError("An employee with this email already exists.");
      return;
    }

    const employee = {
      id: existing ? existing.id : Math.max(100, ...employees.map(e => e.id)) + 1,
      name: name.trim(),
      email: email.trim(),
      department,
      role: role.trim(),
      status,
    };

    dispatch({
      type: editing ? "UPDATE" : "ADD",
      payload: employee,
    });

    navigate("/employees");
  }

  return (
    <>
      <h2>{editing ? "Edit Employee" : "Add Employee"}</h2>
      <form onSubmit={handleSubmit} style={{ background: "white", padding: 25, maxWidth: 500, borderRadius: 8 }}>
        <label>Full Name</label>
        <input style={inputStyle} value={name} onChange={e => setName(e.target.value)} required />

        <label>Email</label>
        <input style={inputStyle} type="email" value={email} onChange={e => setEmail(e.target.value)} required />

        <label>Department</label>
        <select style={inputStyle} value={department} onChange={e => setDepartment(e.target.value)}>
          <option>IT</option>
          <option>HR</option>
          <option>Finance</option>
          <option>Marketing</option>
        </select>

        <label>Role</label>
        <input style={inputStyle} value={role} onChange={e => setRole(e.target.value)} required />

        <label>Status</label>
        <select style={inputStyle} value={status} onChange={e => setStatus(e.target.value)}>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button style={buttonStyle} type="submit">Save Employee</button>
        <button style={{ ...buttonStyle, background: "#6b7280" }} type="button" onClick={() => navigate("/employees")}>Cancel</button>
      </form>
    </>
  );
}

// ---------- EMPLOYEE DETAILS ----------
function EmployeeDetails() {
  const { employees } = useEmployees();
  const { id } = useParams();
  const employee = employees.find(e => e.id === Number(id));

  if (!employee) {
    return <><h2>Employee not found</h2><Link to="/employees">Back to employees</Link></>;
  }

  return (
    <>
      <h2>Employee Details</h2>
      <div style={{ background: "white", padding: 25, borderRadius: 8 }}>
        {Object.entries(employee).map(([key, value]) => (
          <p key={key}><strong>{key.toUpperCase()}:</strong> {value}</p>
        ))}
        <Link to={`/employees/${employee.id}/edit`}>Edit Employee</Link>
        <p><Link to="/employees">Back to list</Link></p>
      </div>
    </>
  );
}

// ---------- LAZY LOADING ----------
const LazyDashboard = lazy(() => Promise.resolve({ default: Dashboard }));
const LazyEmployeeList = lazy(() => Promise.resolve({ default: EmployeeList }));
const LazyEmployeeDetails = lazy(() => Promise.resolve({ default: EmployeeDetails }));
const LazyEmployeeForm = lazy(() => Promise.resolve({ default: EmployeeForm }));

// ---------- MAIN APP ----------
export default function App() {
  const [employees, dispatch] = useReducer(employeeReducer, initialEmployees);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  // Simulate initial data loading and error handling.
  useEffect(() => {
    try {
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    } catch {
      setLoadError("Unable to load employee data.");
      setLoading(false);
    }
  }, []);

  const authValue = {
    user,
    login: (username) => setUser(username),
    logout: () => setUser(null),
  };

  const employeeValue = { employees, dispatch };

  if (loading) {
    return <p style={{ padding: 30 }}>Loading employee portal...</p>;
  }

  if (loadError) {
    return <p style={{ padding: 30, color: "red" }}>{loadError}</p>;
  }

  return (
    <AuthContext.Provider value={authValue}>
      <EmployeeContext.Provider value={employeeValue}>
        <BrowserRouter>
          <Suspense fallback={<p style={{ padding: 30 }}>Loading page...</p>}>
            <Routes>
              <Route path="/login" element={<Login />} />

              <Route path="/dashboard" element={
                <ProtectedRoute><LazyDashboard /></ProtectedRoute>
              } />

              <Route path="/employees" element={
                <ProtectedRoute><LazyEmployeeList /></ProtectedRoute>
              } />

              <Route path="/employees/new" element={
                <ProtectedRoute><LazyEmployeeForm /></ProtectedRoute>
              } />

              <Route path="/employees/:id" element={
                <ProtectedRoute><LazyEmployeeDetails /></ProtectedRoute>
              } />

              <Route path="/employees/:id/edit" element={
                <ProtectedRoute><LazyEmployeeForm editing /></ProtectedRoute>
              } />

              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="*" element={<h2 style={{ padding: 30 }}>404 - Page Not Found</h2>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </EmployeeContext.Provider>
    </AuthContext.Provider>
  );
}
