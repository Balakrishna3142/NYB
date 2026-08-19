import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

import Home from "./Home";
import About from "./About";
import Assets from "./Assets";
import Bundle from "./Bundle";


function App() {

  const [page, setPage] = useState("home");


  const renderPage = () => {

    switch (page) {

      case "home":
        return <Home />;

      case "about":
        return <About />;

      case "assets":
        return <Assets />;

      case "bundle":
        return <Bundle />;

      default:
        return <Home />;

    }
  };


  return (

    <div
      style={{
        fontFamily: "Arial",
        maxWidth: "900px",
        margin: "auto"
      }}
    >

      <Header />


      {/* ===================================
          NAVIGATION
         =================================== */}

      <nav
        style={{
          padding: "20px",
          borderBottom: "1px solid gray"
        }}
      >

        <button
          onClick={() => setPage("home")}
        >
          Home
        </button>

        {" "}

        <button
          onClick={() => setPage("about")}
        >
          Webpack
        </button>

        {" "}

        <button
          onClick={() => setPage("assets")}
        >
          Assets
        </button>

        {" "}

        <button
          onClick={() => setPage("bundle")}
        >
          Bundle
        </button>

      </nav>


      {/* ===================================
          PAGE CONTENT
         =================================== */}

      <main
        style={{
          padding: "30px"
        }}
      >

        {renderPage()}

      </main>


      <Footer />

    </div>
  );
}

export default App;