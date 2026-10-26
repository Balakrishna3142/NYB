
import React, {
  useState,
  useRef,
  useEffect,
  Component,
} from "react";

//  Reusable Component
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

//  Component Composition
function Card({ title, children }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

//  Error Boundary
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong! Please try again.</h3>;
    }

    return this.props.children;
  }
}

//  API Service Layer (sample API data)
const productService = {
  async getProducts() {
    return Promise.resolve([
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Mobile", price: 20000 },
      { id: 3, name: "Headphones", price: 2000 },
    ]);
  },
};

// Main Component
function App() {
  // Controlled component
  const [name, setName] = useState("");

  // Persisting values with useRef
  const renderCount = useRef(0);
  const previousName = useRef("");

  // DOM reference
  const inputRef = useRef(null);

  // API data and fallback UI
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  // Load products through service layer
  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await productService.getProducts();
        setProducts(data);
      } catch {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // DOM reference example
  function focusInput() {
    inputRef.current?.focus();
  }

  // Uncontrolled component example
  function showUncontrolledValue() {
    alert("Uncontrolled value: " + inputRef.current.value);
  }

  return (
    <ErrorBoundary>
      <div style={styles.container}>
        <h1>React Concepts Demo</h1>

        {/* Controlled Component */}
        <Card title="1. Controlled Component">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <p>Name: {name || "Not entered"}</p>
        </Card>

        {/* useRef and DOM References */}
        <Card title="2. useRef and DOM Reference">
          <input ref={inputRef} placeholder="Enter any value" />
          <br /><br />
          <Button onClick={focusInput}>
            Focus Input
          </Button>{" "}
          <Button onClick={showUncontrolledValue}>
            Read Input Value
          </Button>
        </Card>

        {/* Persisting Values */}
        <Card title="3. Persisting Values with useRef">
          <p>Component render count: {renderCount.current}</p>
          <p>Current name: {name || "None"}</p>
          <p>Previous name: {previousName.current || "None"}</p>
        </Card>

        {/* Reusable Components and Composition */}
        <Card title="4. Reusable Components">
          <Button onClick={() => alert("Hello!")}>
            Click Me
          </Button>
          <p>This Card and Button are reusable components.</p>
        </Card>

        {/* API Service Layer and Fallback UI */}
        <Card title="5. Products from API Service">
          {loading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p role="alert">{error}</p>
          ) : products.length === 0 ? (
            <p>No products available.</p>
          ) : (
            products.map((product) => (
              <p key={product.id}>
                {product.name} - ₹{product.price}
              </p>
            ))
          )}
        </Card>

        {/* Environment Variables */}
        <Card title="6. Environment Variables">
          <p>
            API URL:{" "}
            {import.meta.env.VITE_API_URL || "Not configured"}
          </p>
        </Card>
      </div>
    </ErrorBoundary>
  );
}

const styles = {
  container: {
    maxWidth: "650px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "15px",
  },
};

export default App;
