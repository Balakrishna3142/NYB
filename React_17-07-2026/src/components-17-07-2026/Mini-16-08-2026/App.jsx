import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Home Page
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our React application.</p>
    </div>
  );
}

// About Page
function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About page.</p>
    </div>
  );
}

// Services Page
function Services() {
  return (
    <div>
      <h2>Services Page</h2>

      <ul>
        <li>Web Development</li>
        <li>React Development</li>
        <li>UI Design</li>
      </ul>
    </div>
  );
}

// Contact Page
function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>

      <p>Email: example@gmail.com</p>
      <p>Phone: 9876543210</p>
    </div>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>

      <div
        style={{
          padding: "30px",
          fontFamily: "Arial"
        }}
      >

        <h1>My React Website</h1>

        {/* Navigation */}
        <nav>

          <Link to="/">
            Home
          </Link>

          {" | "}

          <Link to="/about">
            About
          </Link>

          {" | "}

          <Link to="/services">
            Services
          </Link>

          {" | "}

          <Link to="/contact">
            Contact
          </Link>

        </nav>

        <hr />

        {/* Routes */}
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
            path="/services"
            element={<Services />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;