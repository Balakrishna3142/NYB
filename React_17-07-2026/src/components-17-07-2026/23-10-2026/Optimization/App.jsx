
import {
  useState,
  useMemo,
  useCallback,
  memo,
  lazy,
  Suspense,
  Profiler,
} from "react";

// Lazy loading
const Dashboard = lazy(() => import("./Dashboard"));

// Memoized child component
const Product = memo(function Product({ product, onSelect }) {
  console.log("Product rendered:", product.name);

  return (
    <li>
      {product.name} - ₹{product.price}
      <button onClick={() => onSelect(product.name)}>
        Select
      </button>
    </li>
  );
});

const products = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: (i + 1) * 10,
}));

function onRender(id, phase, actualDuration) {
  console.log({ id, phase, actualDuration });
}

export default function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);

  console.log("App rendered");

  // useMemo: cache filtered products
  const filteredProducts = useMemo(() => {
    console.log("Filtering products");

    return products
      .filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 50);
  }, [search]);

  // useCallback: preserve function reference
  const handleSelect = useCallback((name) => {
    setSelected(name);
  }, []);

  return (
    <Profiler id="App" onRender={onRender}>
      <main>
        <h1>React Performance Demo</h1>

        <section>
          <h2>1. Rendering and Re-rendering</h2>
          <p>Counter: {count}</p>
          <button onClick={() => setCount((c) => c + 1)}>
            Increase Counter
          </button>
        </section>

        <section>
          <h2>2. React.memo and useCallback</h2>
          <p>Selected product: {selected || "None"}</p>
          <p>Product components: {filteredProducts.length}</p>
          <ul>
            {filteredProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                onSelect={handleSelect}
              />
            ))}
          </ul>
        </section>

        <section>
          <h2>3. useMemo and Search</h2>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
          />
          <p>Matching products: {filteredProducts.length}</p>
        </section>

        <section>
          <h2>4. Lazy Loading and Suspense</h2>
          <button onClick={() => setShowDashboard(true)}>
            Load Dashboard
          </button>

          {showDashboard && (
            <Suspense fallback={<p>Loading dashboard...</p>}>
              <Dashboard />
            </Suspense>
          )}
        </section>
      </main>
    </Profiler>
  );
}
