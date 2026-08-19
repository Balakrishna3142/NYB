import React, { useState } from "react";

import Header from "./Header";

import Home from "./Home";
import BabelDemo from "./BabelDemo";

function App() {

  const [page, setPage] = useState("home");

  function renderPage() {

    if (page === "home") {
      return <Home />;
    }

    if (page === "babel") {
      return <BabelDemo />;
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

        <button
          onClick={() => setPage("home")}
        >
          Home
        </button>

        {" "}

        <button
          onClick={() => setPage("babel")}
        >
          Babel Demo
        </button>

      </nav>

      <hr />

      {renderPage()}

    </div>
  );
}

export default App;