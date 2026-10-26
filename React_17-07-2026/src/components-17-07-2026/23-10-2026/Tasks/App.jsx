
import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  memo,
  lazy,
  Suspense,
  Component,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useNavigate,
  Navigate,
} from "react-router";

// ---------------- ERROR BOUNDARY ----------------

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>Something went wrong!</h2>
      );
    }

    return this.props.children;
  }
}

// ---------------- REUSABLE BUTTON ----------------

function Button({ children, onClick }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

// ---------------- AUTHENTICATION ----------------

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// ---------------- LAYOUT ----------------

function Layout() {
  return (
    <div>
      <h1>React Practice App</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/users">Users</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/reports">Reports</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

// ---------------- HOME + useRef ----------------

function Home() {
  const inputRef = useRef(null);
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Home Page</h2>

      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <Button
        onClick={() => inputRef.current.focus()}
      >
        Focus Input
      </Button>

      <p>Hello, {name || "Guest"}!</p>
    </div>
  );
}

// ---------------- ABOUT ----------------

function About() {
  return <h2>About Page</h2>;
}

// ---------------- LOGIN ----------------

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogin() {
    setIsLoggedIn(true);
    navigate("/dashboard");
  }

  return (
    <div>
      <h2>Mock Login</h2>

      <Button onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}

// ---------------- DASHBOARD ----------------

const UserCard = memo(function UserCard({ user, onSelect }) {
  console.log("UserCard rendered:", user.name);

  return (
    <div>
      <p>{user.name}</p>

      <Button onClick={() => onSelect(user.id)}>
        View User
      </Button>
    </div>
  );
});

function Dashboard({ setIsLoggedIn }) {
  const [count, setCount] = useState(0);

  const users = useMemo(
    () => [
      { id: 1, name: "Ravi" },
      { id: 2, name: "Priya" },
    ],
    []
  );

  const navigate = useNavigate();

  const handleSelect = useCallback(
    (id) => navigate(`/users/${id}`),
    [navigate]
  );

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Count: {count}</p>

      <Button
        onClick={() => setCount((c) => c + 1)}
      >
        Increase Count
      </Button>

      <h3>User List</h3>

      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onSelect={handleSelect}
        />
      ))}

      <Button
        onClick={() => {
          setIsLoggedIn(false);
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </div>
  );
}

// ---------------- USERS + API ----------------

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function fetchUsers() {
      try {
        const apiUrl =
          import.meta.env.VITE_API_URL ||
          "https://jsonplaceholder.typicode.com";

        const response = await fetch(
          `${apiUrl}/users`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        if (!ignore) {
          setUsers(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchUsers();

    return () => {
      ignore = true;
    };
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users Page</h2>

      {users.map((user) => (
        <p key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </p>
      ))}
    </div>
  );
}

// ---------------- DYNAMIC ROUTE ----------------

function UserDetails() {
  const { userId } = useParams();

  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {userId}</p>
    </div>
  );
}

// ---------------- LAZY-LOADED REPORTS ----------------

function ReportsPage() {
  return (
    <div>
      <h2>Reports Page</h2>
      <p>This component is rendered through lazy().</p>
    </div>
  );
}

// Single-file demonstration of lazy/Suspense.
// For actual JavaScript code splitting, move ReportsPage
// into its own file and use lazy(() => import("./ReportsPage")).
const Reports = lazy(() =>
  Promise.resolve({ default: ReportsPage })
);

// ---------------- 404 PAGE ----------------

function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}

// ---------------- MAIN APP + ROUTER ----------------

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<p>Loading page...</p>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              <Route
                path="/login"
                element={
                  <Login setIsLoggedIn={setIsLoggedIn} />
                }
              />

              <Route path="/users" element={<Users />} />

              <Route
                path="/users/:userId"
                element={<UserDetails />}
              />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Dashboard
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/reports"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Reports />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
