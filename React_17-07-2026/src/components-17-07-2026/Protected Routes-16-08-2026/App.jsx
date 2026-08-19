import React, { useState } from "react";

import {
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate
} from "react-router-dom";


// ==========================================
// PROTECTED ROUTE
// ==========================================

function ProtectedRoute({ isAuthenticated, children }) {

  if (!isAuthenticated) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }

  return children;
}


// ==========================================
// HOME PAGE
// ==========================================

function Home() {

  return (
    <div>

      <h2>Home Page</h2>

      <p>
        Welcome to the Home Page.
      </p>

      <p>
        Anyone can access this page.
      </p>

    </div>
  );
}


// ==========================================
// LOGIN PAGE
// ==========================================

function Login({ setIsAuthenticated }) {

  const navigate = useNavigate();

  const handleLogin = () => {

    // Authentication success
    setIsAuthenticated(true);

    alert("Login Successful!");

    // Go to dashboard
    navigate("/dashboard");

  };

  return (
    <div>

      <h2>Login Page</h2>

      <p>
        Please login to access Dashboard.
      </p>

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}


// ==========================================
// DASHBOARD PAGE
// ==========================================

function Dashboard({ setIsAuthenticated }) {

  const navigate = useNavigate();

  const handleLogout = () => {

    setIsAuthenticated(false);

    alert("Logout Successful!");

    navigate("/login");

  };

  return (
    <div>

      <h2>Dashboard Page</h2>

      <p>
        Welcome to the protected Dashboard!
      </p>

      <p>
        Only authenticated users can see this page.
      </p>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>
  );
}


// ==========================================
// PROFILE PAGE
// ==========================================

function Profile() {

  return (
    <div>

      <h2>Profile Page</h2>

      <p>
        Welcome to your profile.
      </p>

    </div>
  );
}


// ==========================================
// APP
// ==========================================

function App() {

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] =
    useState(false);


  return (

    <div
      style={{
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      <h1>
        Protected Routes Example
      </h1>


      {/* =====================================
          NAVIGATION
         ===================================== */}

      <nav>

        <Link to="/">
          Home
        </Link>

        {" | "}

        <Link to="/login">
          Login
        </Link>

        {" | "}

        <Link to="/dashboard">
          Dashboard
        </Link>

        {" | "}

        <Link to="/profile">
          Profile
        </Link>

      </nav>


      <hr />


      {/* Authentication Status */}

      <h3>
        Authentication Status:
        {" "}

        {isAuthenticated
          ? "Logged In"
          : "Logged Out"}
      </h3>


      <hr />


      {/* =====================================
          ROUTES
         ===================================== */}

      <Routes>

        {/* Public Route */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* Login Route */}

        <Route
          path="/login"
          element={
            <Login
              setIsAuthenticated={
                setIsAuthenticated
              }
            />
          }
        />


        {/* Protected Dashboard Route */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              isAuthenticated={
                isAuthenticated
              }
            >
              <Dashboard
                setIsAuthenticated={
                  setIsAuthenticated
                }
              />
            </ProtectedRoute>
          }
        />


        {/* Protected Profile Route */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isAuthenticated={
                isAuthenticated
              }
            >
              <Profile />
            </ProtectedRoute>
          }
        />


        {/* Unknown Route */}

        <Route
          path="*"
          element={
            <h2>
              404 - Page Not Found
            </h2>
          }
        />

      </Routes>

    </div>
  );
}

export default App;