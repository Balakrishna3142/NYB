import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

import Home from "./Home";
import Babel from "./Babel";
import Compare from "./Compare";


function App() {

  const [page, setPage] = useState("home");


  function renderPage() {

    if (page === "home") {
      return <Home />;
    }

    if (page === "babel") {
      return <Babel />;
    }

    if (page === "compare") {
      return <Compare />;
    }

    return <Home />;
  }


  return (
    <div
      style={{
        maxWidth: "900px",
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
          Babel
        </button>

        {" "}

        <button
          onClick={() => setPage("compare")}
        >
          Before / After
        </button>

      </nav>


      <hr />


      <main>
        {renderPage()}
      </main>


      <Footer />

    </div>
  );
}

export default App;