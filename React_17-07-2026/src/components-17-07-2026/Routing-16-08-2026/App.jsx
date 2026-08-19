import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Navbar
  from "./components/Navbar";


import Home
  from "./pages/Home";

import About
  from "./pages/About";

import Students
  from "./pages/Students";

import StudentDetails
  from "./pages/StudentDetails";

import NotFound
  from "./pages/NotFound";


function App() {

  return (

    

      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          padding: "20px",
          fontFamily: "Arial"
        }}
      >

        <h1>
          React Mini Project
        </h1>


        <Navbar />


        <hr />


        <Routes>


          {/* Home */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* About */}

          <Route
            path="/about"
            element={<About />}
          />


          {/* Students */}

          <Route
            path="/students"
            element={<Students />}
          />


          {/* Dynamic Route */}

          <Route
            path="/students/:id"
            element={
              <StudentDetails />
            }
          />


          {/* 404 */}

          <Route
            path="*"
            element={
              <NotFound />
            }
          />


        </Routes>

      </div>


  );
}

export default App;