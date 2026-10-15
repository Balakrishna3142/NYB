
import {
  useState,
  useMemo,
  useCallback,
  memo,
  lazy,
  Suspense,
} from "react";

// Lazy-loaded page
const Reports = lazy(() =>
  Promise.resolve({
    default: function Reports() {
      return <h3>Reports Page Loaded!</h3>;
    },
  })
);

// Memoized child component
const User = memo(function User({ name, onSelect }) {
  console.log("User component rendered");

  return (
    <button onClick={() => onSelect(name)}>
      Select {name}
    </button>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [showReports, setShowReports] = useState(false);

  console.log("App component rendered");

  const users = ["Rahul", "Priya", "Amit", "Sneha"];

  // useMemo: cache filtered results
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");

    return users.filter(user =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // useCallback: stable function reference
  const handleSelect = useCallback((name) => {
    setSelected(name);
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>React Performance Optimization</h1>

      <hr />

      <h2>1. Component Re-rendering</h2>
      <p>Counter: {count}</p>

      <button onClick={() => setCount(c => c + 1)}>
        Increment Counter
      </button>

      <hr />

      <h2>2. React.memo and useCallback</h2>

      {filteredUsers.map(user => (
        <User
          key={user}
          name={user}
          onSelect={handleSelect}
        />
      ))}

      <p>Selected User: {selected || "None"}</p>

      <hr />

      <h2>3. useMemo</h2>

      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search users"
      />

      <p>Matching users: {filteredUsers.length}</p>

      <hr />

      <h2>4. Lazy Loading and Suspense</h2>

      <button onClick={() => setShowReports(true)}>
        Load Reports Page
      </button>

      {showReports && (
        <Suspense fallback={<p>Loading reports...</p>}>
          <Reports />
        </Suspense>
      )}
    </div>
  );
}
