
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  useSearchParams,
  Navigate,
  useLocation
} from "react-router-dom";

// Main layout
function Layout() {
  return (
    <div>
      <h1>React Router Demo</h1>

      <nav style={{ display: "flex", gap: 15 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

// Home page
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to React Router.</p>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

// About page
function About() {
  return <h2>About Page</h2>;
}

// Products with query parameters
function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  return (
    <div>
      <h2>Products Page</h2>
      <p>Category: {category}</p>

      <button
        onClick={() =>
          setSearchParams({ category: "mobile" })
        }
      >
        Show Mobiles
      </button>

      <p>
        <Link to="/products/101">Product 101</Link>
      </p>
      <p>
        <Link to="/products/102">Product 102</Link>
      </p>
    </div>
  );
}

// Dynamic route using useParams
function ProductDetails() {
  const { id } = useParams();

  return <h2>Product Details: {id}</h2>;
}

// Login page
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogin(e) {
    e.preventDefault();

    // Demo credentials only
    if (username === "admin" && password === "1234") {
      localStorage.setItem("loggedIn", "true");

      navigate(location.state?.from || "/dashboard", {
        replace: true
      });
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login Page</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <br /><br />

      <button type="submit">Login</button>
    </form>
  );
}

// Protect routes
function ProtectedRoute() {
  const location = useLocation();
  const loggedIn = localStorage.getItem("loggedIn") === "true";

  return loggedIn
    ? <Outlet />
    : (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
}

// Dashboard layout: nested routes
function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard Layout</h2>

      <Link to="/dashboard">Overview</Link>{" | "}
      <Link to="/dashboard/profile">Profile</Link>{" | "}
      <Link to="/dashboard/settings">Settings</Link>

      <Outlet />
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("loggedIn");
    navigate("/login", { replace: true });
  }

  return (
    <div>
      <h3>Dashboard Home</h3>
      <p>You are logged in.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

function Profile() {
  return <h3>Profile Page</h3>;
}

function Settings() {
  return <h3>Settings Page</h3>;
}

// 404 page
function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}

// All routes
export default function App() {
  return (
    <Routes>
      {/* Layout route */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />

        {/* Dynamic route */}
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        {/* Public login route */}
        <Route path="/login" element={<Login />} />

        {/* Protected nested routes */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={<DashboardLayout />}
          >
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
