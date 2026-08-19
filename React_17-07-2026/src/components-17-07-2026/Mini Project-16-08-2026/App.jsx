import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

import Home from "./Home";
import About from "./About";
import Assets from "./Assets";

function App() {

  const [page, setPage] = useState("home");

  function renderPage() {

    if (page === "home") {
      return <Home />;
    }

    if (page === "about") {
      return <About />;
    }

    if (page === "assets") {
      return <Assets />;
    }

    return <Home />;
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >

      <Header />

      <nav>

        <button onClick={() => setPage("home")}>
          Home
        </button>

        {" "}

        <button onClick={() => setPage("about")}>
          About
        </button>

        {" "}

        <button onClick={() => setPage("assets")}>
          Assets
        </button>

      </nav>

      <hr />

      {renderPage()}

      <Footer />

    </div>
  );
}

export default App;