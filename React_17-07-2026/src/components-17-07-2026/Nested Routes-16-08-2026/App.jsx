import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";


// ==========================================
// HOME PAGE
// ==========================================

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to Home Page.</p>
    </div>
  );
}


// ==========================================
// DASHBOARD PAGE - PARENT ROUTE
// ==========================================

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <nav>
        <Link to="/dashboard/profile">
          Profile
        </Link>

        {" | "}

        <Link to="/dashboard/settings">
          Settings
        </Link>

        {" | "}

        <Link to="/dashboard/courses">
          Courses
        </Link>
      </nav>

      <hr />

      {/* Child routes will appear here */}
      <Outlet />
    </div>
  );
}


// ==========================================
// PROFILE - CHILD ROUTE
// ==========================================

function Profile() {
  return (
    <div>
      <h3>Profile Page</h3>
      <p>Name: balu</p>
      <p>Course: React JS</p>
    </div>
  );
}


// ==========================================
// SETTINGS - CHILD ROUTE
// ==========================================

function Settings() {
  return (
    <div>
      <h3>Settings Page</h3>
      <p>Settings are displayed here.</p>
    </div>
  );
}


// ==========================================
// COURSES - CHILD ROUTE
// ==========================================

function Courses() {
  return (
    <div>
      <h3>Courses Page</h3>

      <ul>
        <li>React JS</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
      </ul>
    </div>
  );
}


// ==========================================
// MAIN APP
// ==========================================

function App() {
  return (
    <BrowserRouter>

      <div
        style={{
          padding: "30px",
          fontFamily: "Arial"
        }}
      >

        <h1>React Nested Routes</h1>

        {/* Main Navigation */}

        <nav>

          <Link to="/">
            Home
          </Link>

          {" | "}

          <Link to="/dashboard">
            Dashboard
          </Link>

        </nav>

        <hr />

        <Routes>

          {/* Main Route */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* Parent Route */}

          <Route
            path="/dashboard"
            element={<Dashboard />}
          >

            {/* Child Routes */}

            <Route
              path="profile"
              element={<Profile />}
            />

            <Route
              path="settings"
              element={<Settings />}
            />

            <Route
              path="courses"
              element={<Courses />}
            />

          </Route>

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;