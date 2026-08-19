import React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";


// ==========================================
// HOME PAGE
// ==========================================

function Home() {

  const navigate = useNavigate();

  return (
    <div>

      <h2>Home Page</h2>

      <p>
        Welcome to Home Page.
      </p>

      <button
        onClick={() => navigate("/about")}
      >
        Go to About
      </button>

      <br />
      <br />

      <button
        onClick={() => navigate("/contact")}
      >
        Go to Contact
      </button>

    </div>
  );
}


// ==========================================
// ABOUT PAGE
// ==========================================

function About() {

  const navigate = useNavigate();

  return (
    <div>

      <h2>About Page</h2>

      <p>
        This is the About Page.
      </p>

      <button
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>

    </div>
  );
}


// ==========================================
// CONTACT PAGE
// ==========================================

function Contact() {

  const navigate = useNavigate();

  return (
    <div>

      <h2>Contact Page</h2>

      <p>
        Email: example@gmail.com
      </p>

      <button
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>

    </div>
  );
}


// ==========================================
// LOGIN PAGE
// ==========================================

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {

    alert("Login Successful!");

    // Programmatic navigation
    navigate("/dashboard");

  };

  return (
    <div>

      <h2>Login Page</h2>

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}


// ==========================================
// DASHBOARD PAGE
// ==========================================

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div>

      <h2>Dashboard Page</h2>

      <p>
        Welcome to Dashboard.
      </p>

      <button
        onClick={() => navigate("/")}
      >
        Logout
      </button>

    </div>
  );
}


// ==========================================
// APP
// ==========================================

function App() {

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      <h1>
        useNavigate() Example
      </h1>

      {/* Normal Navigation using Link */}

      <nav>

        <Link to="/">
          Home
        </Link>

        {" | "}

        <Link to="/about">
          About
        </Link>

        {" | "}

        <Link to="/contact">
          Contact
        </Link>

        {" | "}

        <Link to="/login">
          Login
        </Link>

      </nav>

      <hr />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

    </div>
  );
}

export default App;