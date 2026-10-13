
import { useState, useEffect } from "react";

function useCustom() {
  // Counter logic
  const [count, setCount] = useState(0);

  // API logic
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
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

    fetchUsers();

    return () => controller.abort();
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    users,
    loading,
    error,
  };
}

export default useCustom;
