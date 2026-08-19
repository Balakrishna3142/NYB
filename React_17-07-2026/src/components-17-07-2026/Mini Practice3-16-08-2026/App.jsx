import React, { useState } from "react";

import {
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  Navigate
} from "react-router-dom";


// ==================================================
// HOME PAGE
// ==================================================

function Home() {
  return (
    <div>

      <h2>Home Page</h2>

      <p>
        Welcome to our Product Application.
      </p>

      <h3>Products</h3>

      <ul>

        <li>
          <Link to="/product/101">
            Laptop
          </Link>
        </li>

        <li>
          <Link to="/product/102">
            Mobile
          </Link>
        </li>

        <li>
          <Link to="/product/103">
            Headphones
          </Link>
        </li>

      </ul>

    </div>
  );
}


// ==================================================
// DYNAMIC PRODUCT DETAILS
// ==================================================

function ProductDetails() {

  // Get dynamic parameter
  const { id } = useParams();

  const products = {
    101: {
      name: "Laptop",
      price: "₹50,000"
    },

    102: {
      name: "Mobile",
      price: "₹25,000"
    },

    103: {
      name: "Headphones",
      price: "₹3,000"
    }
  };


  const product = products[id];


  // If product doesn't exist
  if (!product) {
    return (
      <div>

        <h2>Product Not Found</h2>

        <Link to="/">
          Back to Home
        </Link>

      </div>
    );
  }


  return (
    <div>

      <h2>Product Details</h2>

      <p>
        Product ID: {id}
      </p>

      <p>
        Product Name: {product.name}
      </p>

      <p>
        Price: {product.price}
      </p>

      <Link to="/">
        Back to Products
      </Link>

    </div>
  );
}


// ==================================================
// LOGIN PAGE
// ==================================================

function Login({ setIsLoggedIn }) {

  const navigate = useNavigate();


  const handleLogin = () => {

    setIsLoggedIn(true);

    alert("Login Successful!");

    navigate("/dashboard");

  };


  return (
    <div>

      <h2>Login Page</h2>

      <p>
        Please login to access the Dashboard.
      </p>

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}


// ==================================================
// PROTECTED ROUTE
// ==================================================

function ProtectedRoute({
  isLoggedIn,
  children
}) {

  if (!isLoggedIn) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }

  return children;
}


// ==================================================
// DASHBOARD PAGE
// ==================================================

function Dashboard({ setIsLoggedIn }) {

  const navigate = useNavigate();


  const handleLogout = () => {

    setIsLoggedIn(false);

    alert("Logout Successful!");

    navigate("/login");

  };


  return (
    <div>

      <h2>Dashboard</h2>

      <p>
        Welcome to the protected Dashboard.
      </p>

      <p>
        Only logged-in users can access this page.
      </p>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>
  );
}


// ==================================================
// CUSTOM 404 PAGE
// ==================================================

function NotFound() {

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px"
      }}
    >

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you are looking for
        does not exist.
      </p>

      <Link to="/">
        Go Back to Home
      </Link>

    </div>
  );
}


// ==================================================
// APP
// ==================================================

function App() {

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);


  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      <h1>
        React Router Mini Project
      </h1>


      {/* ============================================
          NAVIGATION
         ============================================ */}

      <nav>

        <Link to="/">
          Home
        </Link>

        {" | "}

        <Link to="/login">
          Login
        </Link>

        {" | "}

        <Link to="/dashboard">
          Dashboard
        </Link>

      </nav>


      <hr />


      {/* Authentication Status */}

      <h3>

        Status:

        {" "}

        {isLoggedIn
          ? "Logged In"
          : "Logged Out"}

      </h3>


      <hr />


      {/* ============================================
          ROUTES
         ============================================ */}

      <Routes>


        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* DYNAMIC PRODUCT */}

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />


        {/* LOGIN */}

        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={
                setIsLoggedIn
              }
            />
          }
        />


        {/* PROTECTED DASHBOARD */}

        <Route
          path="/dashboard"
          element={

            <ProtectedRoute
              isLoggedIn={
                isLoggedIn
              }
            >

              <Dashboard
                setIsLoggedIn={
                  setIsLoggedIn
                }
              />

            </ProtectedRoute>

          }
        />


        {/* CUSTOM 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </div>
  );
}

export default App;