import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
} from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav style={{ padding: "15px", background: "#222" }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/products" style={linkStyle}>Products</Link>
      <Link to="/dashboard" style={linkStyle}>Dashboard</Link>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <Link to="/login" style={linkStyle}>Login</Link>
      )}
    </nav>
  );
}

const linkStyle = {
  color: "white",
  marginRight: "20px",
  textDecoration: "none",
};

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the React Routing Application.</p>

      <h3>Counter</h3>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This application demonstrates important React concepts.</p>
      <ul>
        <li>Components</li>
        <li>Props</li>
        <li>State</li>
        <li>Events</li>
        <li>Conditional Rendering</li>
        <li>Lists</li>
        <li>React Router</li>
      </ul>
    </div>
  );
}

function Products() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          {/* Dynamic Route */}
          <Link to={`/products/${product.id}`}>
            View Product
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
}

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Selected Product ID: {id}</p>
      <p>This page uses a dynamic route.</p>
    </div>
  );
}

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (username.trim() !== "") {
      setIsLoggedIn(true);
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the protected dashboard!</p>
      <p>You can see this page only after logging in.</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <main style={{ padding: "20px" }}>
        <Routes>
          {/* Multiple Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />

          {/* Dynamic Route */}
          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          {/* Login Route */}
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />

          {/* Protected Route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Invalid Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;