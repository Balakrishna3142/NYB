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
  from "./Pages/NotFound";


class App extends React.Component {

  render() {

    return (

      <BrowserRouter>

        <div
          style={{
            maxWidth: "800px",
            margin: "auto",
            padding: "20px",
            fontFamily: "Arial"
          }}
        >

          <Navbar />

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
              path="/students"
              element={<Students />}
            />

            <Route
              path="/students/:id"
              element={<StudentDetails />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </div>

      </BrowserRouter>
    );
  }
}

export default App;