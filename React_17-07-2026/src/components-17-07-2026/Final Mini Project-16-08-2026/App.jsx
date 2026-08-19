import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ProtectedRoute from "./ProtectedRoute";

import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

import Services, {
  WebDevelopment,
  AppDevelopment
} from "./Services";

import NotFound from "./NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function logout() {
    setIsLoggedIn(false);
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
        <h1>React Final Mini Project</h1>

        <Navbar
          isLoggedIn={isLoggedIn}
          logout={logout}
        />

        <hr />

        <Routes>

          {/* Browser Routing */}
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          {/* Login */}
          <Route
            path="/login"
            element={
              <Login
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />

          {/* Protected Route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Nested + Dynamic Routing */}
          <Route
            path="/products"
            element={<Products />}
          >
            <Route
              path=":id"
              element={<ProductDetails />}
            />
          </Route>

          {/* Nested Services */}
          <Route
            path="/services"
            element={<Services />}
          >
            <Route
              path="web"
              element={<WebDevelopment />}
            />

            <Route
              path="app"
              element={<AppDevelopment />}
            />
          </Route>

          {/* Custom 404 */}
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