
import React, { useState, useEffect } from "react";

// 1. Custom Hook for reusable counter logic
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return { count, increment, decrement, reset };
}

// 2. Custom Hook for API fetching
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// 3. Main Component
export default function App() {
  const { count, increment, decrement, reset } = useCounter();

  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Custom Hooks</h1>

      {/* Counter Example */}
      <h2>Reusable Counter</h2>
      <h3>Count: {count}</h3>

      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>{" "}
      <button onClick={reset}>Reset</button>

      <hr />

      {/* API Fetching Example */}
      <h2>Users List (API Fetching)</h2>

      {loading && <p>Loading users...</p>}

      {error && <p>Error: {error}</p>}

      {users &&
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
          </div>
        ))}
    </div>
  );
}
