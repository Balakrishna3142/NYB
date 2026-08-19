import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


// ==========================================
// HOME PAGE
// ==========================================

function Home() {
  return (
    <div>
      <h2>Home Page</h2>

      <p>
        Welcome to our React application.
      </p>

      <Link to="/about">
        Go to About
      </Link>
    </div>
  );
}


// ==========================================
// ABOUT PAGE
// ==========================================

function About() {
  return (
    <div>
      <h2>About Page</h2>

      <p>
        This is the About page.
      </p>

      <Link to="/">
        Go to Home
      </Link>
    </div>
  );
}


// ==========================================
// CUSTOM 404 PAGE
// ==========================================

function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px"
      }}
    >

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you are looking for
        does not exist.
      </p>

      <Link to="/">
        Go Back to Home
      </Link>

    </div>
  );
}


// ==========================================
// MAIN APP
// ==========================================

function App() {

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      <h1>React Custom 404 Page</h1>

      <nav>

        <Link to="/">
          Home
        </Link>

        {" | "}

        <Link to="/about">
          About
        </Link>

      </nav>

      <hr />

      <Routes>

        {/* Home Route */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* About Route */}

        <Route
          path="/about"
          element={<About />}
        />

        {/* Custom 404 Route */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </div>
  );
}

export default App;