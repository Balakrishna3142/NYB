import React from "react";
import {
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";


// Home Page
function Home() {
  return (
    <div>
      <h2>Home Page</h2>

      <p>Select a student:</p>

      <Link to="/student/101">
        Ravi
      </Link>

      <br />

      <Link to="/student/102">
        Kiran
      </Link>

      <br />

      <Link to="/student/103">
        Sita
      </Link>
    </div>
  );
}


// Student Page
function Student() {

  // Access route parameter
  const { id } = useParams();

  return (
    <div>
      <h2>Student Details</h2>

      <p>Student ID: {id}</p>

      <Link to="/">
        Back to Home
      </Link>
    </div>
  );
}


// Main App
function App() {
  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      <h1>useParams() Example</h1>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        {/* Dynamic Route */}
        <Route
          path="/student/:id"
          element={<Student />}
        />

      </Routes>

    </div>
  );
}

export default App;