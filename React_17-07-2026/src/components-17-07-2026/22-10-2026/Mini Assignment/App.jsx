
import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

// API
const API = "https://jsonplaceholder.typicode.com/users";

async function apiRequest(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error("API request failed");
  return response.json();
}

// Reducer
const initialState = {
  users: [],
  loading: false,
  error: "",
};

function userReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: "" };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ADD":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "EDIT":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.id
            ? { ...u, ...action.payload }
            : u
        ),
      };
    case "DELETE":
      return {
        ...state,
        users: state.users.filter(
          (u) => u.id !== action.payload
        ),
      };
    default:
      return state;
  }
}

// Context API
const UserContext = createContext(null);

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(
    userReducer,
    initialState
  );

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  return useContext(UserContext);
}

// Custom Hook
function useUsers() {
  const { state, dispatch } = useUserContext();

  async function loadUsers() {
    dispatch({ type: "LOADING" });

    try {
      const data = await apiRequest(API);
      dispatch({ type: "SET_USERS", payload: data });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return { state, dispatch, loadUsers };
}

// User List, Search and Filter
function UserList() {
  const { state, dispatch, loadUsers } = useUsers();
  const [search, setSearch] = useState("");
  const [company, setCompany] = useState("all");

  const navigate = useNavigate();

  const companies = [
    ...new Set(
      state.users.map((u) => u.company?.name).filter(Boolean)
    ),
  ];

  const filteredUsers = state.users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());

    const matchesCompany =
      company === "all" || u.company?.name === company;

    return matchesSearch && matchesCompany;
  });

  async function deleteUser(user) {
    if (!window.confirm(`Delete ${user.name}?`)) return;

    try {
      await apiRequest(`${API}/${user.id}`, {
        method: "DELETE",
      });

      dispatch({ type: "DELETE", payload: user.id });
    } catch (error) {
      alert("Delete failed: " + error.message);
    }
  }

  if (state.loading) return <p>Loading users...</p>;

  if (state.error) {
    return (
      <div>
        <p>Error: {state.error}</p>
        <button onClick={loadUsers}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h2>User List</h2>

      <input
        placeholder="Search name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      >
        <option value="all">All Companies</option>
        {companies.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>

      <button onClick={() => navigate("/add")}>
        Add User
      </button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.company?.name || "N/A"}</td>
              <td>
                <Link to={`/users/${u.id}`}>Details</Link>{" "}
                <Link to={`/edit/${u.id}`}>Edit</Link>{" "}
                <button onClick={() => deleteUser(u)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredUsers.length === 0 && <p>No users found.</p>}
    </div>
  );
}

// Add and Edit User Form
function UserForm({ edit = false }) {
  const { id } = useParams();
  const { state, dispatch } = useUserContext();
  const navigate = useNavigate();

  const existing = state.users.find(
    (u) => String(u.id) === id
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (edit && existing) {
      setForm({
        name: existing.name || "",
        email: existing.email || "",
        phone: existing.phone || "",
      });
    }
  }, [edit, existing]);

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      if (edit) {
        const updated = await apiRequest(`${API}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        dispatch({
          type: "EDIT",
          payload: { ...updated, ...form, id: existing.id },
        });
      } else {
        const created = await apiRequest(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        dispatch({
          type: "ADD",
          payload: { ...created, ...form },
        });
      }

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  if (edit && !existing) {
    return <p>User not found. <Link to="/">Go back</Link></p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{edit ? "Edit User" : "Add User"}</h2>

      <input
        placeholder="Name"
        required
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <br />

      <input
        type="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <br />

      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
      />

      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button disabled={saving}>
        {saving ? "Saving..." : edit ? "Update User" : "Add User"}
      </button>

      <Link to="/"> Cancel</Link>
    </form>
  );
}

// User Details
function UserDetails() {
  const { id } = useParams();
  const { state } = useUserContext();

  const user = state.users.find(
    (u) => String(u.id) === id
  );

  if (state.loading) return <p>Loading...</p>;

  if (!user) {
    return <p>User not found. <Link to="/">Back</Link></p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone || "N/A"}</p>
      <p><b>Company:</b> {user.company?.name || "N/A"}</p>
      <p><b>City:</b> {user.address?.city || "N/A"}</p>
      <Link to={`/edit/${user.id}`}>Edit</Link>{" "}
      <Link to="/">Back to List</Link>
    </div>
  );
}

// Main App
function AppContent() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React User Management</h1>

      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/add">Add User</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserForm />} />
        <Route
          path="/edit/:id"
          element={<UserForm edit />}
        />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </BrowserRouter>
  );
}
