
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

//  Create Context for global data
const AppContext = createContext();

//  Custom Hook for Context
function useAppContext() {
  return useContext(AppContext);
}

//  Custom Hook for reusable counter logic
function useCounter() {
  const [count, setCount] = useState(0);

  return {
    count,
    increment: () => setCount((prev) => prev + 1),
    decrement: () => setCount((prev) => prev - 1),
    reset: () => setCount(0),
  };
}

//  Custom Hook for API fetching
function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
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

//  Reusable component using Props and Context
function Header({ title }) {
  const { username, setUsername, theme, setTheme } =
    useAppContext();

  return (
    <header>
      <h1>{title}</h1>
      <h3>Welcome, {username}!</h3>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Switch Theme
      </button>
    </header>
  );
}

//  Counter component using Custom Hook
function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <section>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </section>
  );
}

//  API component using Custom Hook
function UserList() {
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <h2>Users from API</h2>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </section>
  );
}

//  Main App with Form, State, List and Context
function Dashboard() {
  const { theme } = useAppContext();
  const [name, setName] = useState("");
  const [students, setStudents] = useState(["Ravi", "Sita"]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) return;

    setStudents((prev) => [...prev, name.trim()]);
    setName("");
  }

  const styles = {
    background: theme === "dark" ? "#222" : "#fff",
    color: theme === "dark" ? "#fff" : "#222",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <main style={styles}>
      <Header title="React Revision Project" />

      <hr />
      <Counter />

      <hr />
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student name"
        />
        <button type="submit">Add Student</button>
      </form>

      <h3>Student List</h3>
      {students.map((student, index) => (
        <p key={`${student}-${index}`}>{student}</p>
      ))}

      <hr />
      <UserList />
    </main>
  );
}

// Context Provider
function App() {
  const [username, setUsername] = useState("Ravi");
  const [theme, setTheme] = useState("light");

  return (
    <AppContext.Provider
      value={{ username, setUsername, theme, setTheme }}
    >
      <Dashboard />
    </AppContext.Provider>
  );
}

export default App;
