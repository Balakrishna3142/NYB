import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


// ==========================================
// 1. HOME PAGE
// ==========================================

function Home() {
  return (
    <div>
      <h2>Home Page</h2>

      <p>
        Welcome to the React Router application.
      </p>

      <p>
        This is an example of Browser Routing.
      </p>
    </div>
  );
}


// ==========================================
// 2. ABOUT PAGE
// ==========================================

function About() {
  return (
    <div>
      <h2>About Page</h2>

      <p>
        This page explains our application.
      </p>
    </div>
  );
}


// ==========================================
// 3. CONTACT PAGE
// ==========================================

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>

      <p>
        Email: example@gmail.com
      </p>

      <p>
        Phone: 9876543210
      </p>
    </div>
  );
}


// ==========================================
// 4. SERVICES PAGE
// ==========================================

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


// ==========================================
// 5. NOT FOUND PAGE
// ==========================================

function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>

      <p>
        The requested page does not exist.
      </p>
    </div>
  );
}


// ==========================================
// 6. MAIN APP
// ==========================================

function App() {
  return (

    // ========================================
    // BrowserRouter
    // ========================================

    <BrowserRouter>

      <div
        style={{
          padding: "30px",
          fontFamily: "Arial"
        }}
      >

        <h1>React Browser Routing</h1>

        <p>
          Multiple pages using React Router
        </p>

        <hr />


        {/* ====================================
            NAVIGATION USING Link
           ==================================== */}

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


        {/* ====================================
            ROUTES
           ==================================== */}

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

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>


        <hr />


        {/* ====================================
            ROUTING CONCEPTS
           ==================================== */}

        <h2>Routing Concepts</h2>

        <h3>Client-Side Routing</h3>

        <p>
          React Router changes the displayed
          component without completely
          reloading the browser page.
        </p>


        <h3>Server-Side Routing</h3>

        <p>
          In server-side routing, the browser
          requests a new page from the server
          for different URLs.
        </p>


        <h3>BrowserRouter</h3>

        <p>
          BrowserRouter enables browser-based
          routing in React applications.
        </p>


        <h3>Routes and Route</h3>

        <p>
          Routes contains multiple Route
          definitions. Each Route maps a URL
          path to a React component.
        </p>


        <h3>Link</h3>

        <p>
          Link is used to navigate between
          pages without a full browser reload.
        </p>

      </div>

    </BrowserRouter>
  );
}

export default App;