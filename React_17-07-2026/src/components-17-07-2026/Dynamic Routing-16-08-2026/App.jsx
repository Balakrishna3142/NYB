import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";


// ==========================================
// HOME PAGE
// ==========================================

function Home() {
  return (
    <div>
      <h2>Home Page</h2>

      <p>Select a Student:</p>

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


// ==========================================
// STUDENT PAGE
// ==========================================

function Student() {

  // Get dynamic route parameter
  const { id } = useParams();

  return (
    <div>

      <h2>Student Details</h2>

      <p>
        Student ID: {id}
      </p>

      <Link to="/">
        Back to Home
      </Link>

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

        <h1>Dynamic Routes Example</h1>

        <hr />

        <Routes>

          {/* Normal Route */}

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