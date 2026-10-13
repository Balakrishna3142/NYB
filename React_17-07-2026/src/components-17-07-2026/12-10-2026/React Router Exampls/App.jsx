
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
  useSearchParams,
  useNavigate
} from "react-router-dom";

import { useState } from "react";

// Layout component
function Layout({ isLoggedIn, logout }) {
  return (
    <div>
      <h1>React Router Example</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products?category=books">Products</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>

        {isLoggedIn && (
          <button onClick={logout}>Logout</button>
        )}
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

// Home page and demo login
function Home({ login }) {
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/dashboard");
  }

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the website!</p>
      <button onClick={handleLogin}>Demo Login</button>
    </div>
  );
}

// Query parameters
function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";

  return (
    <div>
      <h2>Products Page</h2>
      <p>Category: {category}</p>

      <button onClick={() => setSearchParams({ category: "books" })}>
        Books
      </button>

      <button onClick={() => setSearchParams({ category: "electronics" })}>
        Electronics
      </button>
    </div>
  );
}

// Protected dashboard
function Dashboard({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>This is a protected page.</p>
    </div>
  );
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

// Main application
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              isLoggedIn={isLoggedIn}
              logout={logout}
            />
          }
        >
          {/* Nested routes */}
          <Route
            index
            element={<Home login={login} />}
          />

          <Route
            path="products"
            element={<Products />}
          />

          {/* Protected route */}
          <Route
            path="dashboard"
            element={
              <Dashboard isLoggedIn={isLoggedIn} />
            }
          />

          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
