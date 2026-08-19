import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Home from "./Home";
import Concepts from "./Concepts";
import Routing from "./Routing";
import ReactMemoPage from "./ReactMemo";
import NotFound from "./NotFound";

import { Product } from "./Routing";


function App() {

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


        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/concepts"
            element={<Concepts />}
          />

          <Route
            path="/routing"
            element={<Routing />}
          />

          <Route
            path="/product/:id"
            element={<Product />}
          />

          <Route
            path="/memo"
            element={<ReactMemoPage />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>


        <Footer />

      </div>

    

  );
}

export default App;