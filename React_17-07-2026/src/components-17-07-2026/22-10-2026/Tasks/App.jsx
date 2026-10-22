
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


//  GLOBAL CONTEXT
const UserContext = createContext();


// REDUCER: ADD, UPDATE, DELETE, RESET

const initialState = [];

function userReducer(state, action) {
  switch (action.type) {
    case "SET":
      return action.payload;

    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.map((user) =>
        user.id === action.payload.id
          ? { ...user, ...action.payload }
          : user
      );

    case "DELETE":
      return state.filter((user) => user.id !== action.payload);

    case "RESET":
      return initialState;

    default:
      return state;
  }
}


//  CUSTOM HOOK: API FETCHING

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch users");
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

    // Cleanup: cancel request on unmount or URL change
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}


//  CUSTOM HOOK: DEBOUNCE

function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup previous timer
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}


// 5. MAIN APPLICATION

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [users, dispatch] = useReducer(userReducer, initialState);
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [sort, setSort] = useState("asc");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  const debouncedSearch = useDebounce(search);

  // Load fetched users into reducer state
  useEffect(() => {
    if (!loading && !error) {
      dispatch({ type: "SET", payload: data });
    }
  }, [data, loading, error]);

  // Demonstrate an effect that runs after every render
  useEffect(() => {
    document.title = `User Dashboard (${users.length})`;
  });

  // Demonstrate an effect with an empty dependency array
  useEffect(() => {
    console.log("Dashboard mounted");

    return () => {
      console.log("Dashboard unmounted");
    };
  }, []);

  
  // 6. REST API OPERATIONS
  
  async function apiRequest(url, method, body) {
    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    return response.status === 204 ? null : response.json();
  }

  // POST: Add user
  async function addUser(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setBusy(true);
    setMessage("");

    const newUser = {
      name: name.trim(),
      email: email.trim(),
      address: { city: "Unknown" },
    };

    try {
      const result = await apiRequest(
        "https://jsonplaceholder.typicode.com/users",
        "POST",
        newUser
      );

      // Use a unique local ID because this API simulates writes
      dispatch({
        type: "ADD",
        payload: {
          ...newUser,
          ...result,
          id: `local-${Date.now()}`,
        },
      });

      setName("");
      setEmail("");
      setMessage("User added successfully.");
    } catch (err) {
      setMessage(err.message);
    } finally {
      setBusy(false);
    }
  }

  // PATCH: Update user
  async function updateUser(user) {
    const updatedName = `${user.name} (Updated)`;

    setMessage("");

    try {
      if (typeof user.id === "number") {
        await apiRequest(
          `https://jsonplaceholder.typicode.com/users/${user.id}`,
          "PATCH",
          { name: updatedName }
        );
      }

      dispatch({
        type: "UPDATE",
        payload: { id: user.id, name: updatedName },
      });

      setMessage("User updated.");
    } catch (err) {
      setMessage(err.message);
    }
  }

  // PUT: Replace user
  async function replaceUser(user) {
    const replacement = {
      name: user.name,
      email: user.email,
      username: user.username || user.name,
      phone: user.phone || "",
      website: user.website || "",
    };

    setMessage("");

    try {
      if (typeof user.id === "number") {
        await apiRequest(
          `https://jsonplaceholder.typicode.com/users/${user.id}`,
          "PUT",
          replacement
        );
      }

      dispatch({
        type: "UPDATE",
        payload: { id: user.id, ...replacement },
      });

      setMessage("User replaced.");
    } catch (err) {
      setMessage(err.message);
    }
  }

  // DELETE: Remove user
  async function deleteUser(user) {
    setMessage("");

    try {
      if (typeof user.id === "number") {
        await apiRequest(
          `https://jsonplaceholder.typicode.com/users/${user.id}`,
          "DELETE"
        );
      }

      dispatch({ type: "DELETE", payload: user.id });
      setMessage("User deleted.");
    } catch (err) {
      setMessage(err.message);
    }
  }

  // ===============================
  // 7. SEARCH, FILTER, SORT
  // ===============================
  const cities = [
    ...new Set(users.map((user) => user.address?.city).filter(Boolean)),
  ];

  const filteredUsers = users
    .filter((user) =>
      `${user.name} ${user.email}`
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    )
    .filter(
      (user) =>
        cityFilter === "all" || user.address?.city === cityFilter
    )
    .sort((a, b) =>
      sort === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  // ===============================
  // 8. LOADING / ERROR STATES
  // ===============================
  if (loading) return <h2>Loading users...</h2>;

  if (error) {
    return (
      <div>
        <h2>Error: {error}</h2>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      <Dashboard
        users={filteredUsers}
        cities={cities}
        search={search}
        setSearch={setSearch}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
        sort={sort}
        setSort={setSort}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        busy={busy}
        message={message}
        addUser={addUser}
        updateUser={updateUser}
        replaceUser={replaceUser}
        deleteUser={deleteUser}
      />
    </UserContext.Provider>
  );
}

// ===============================
// 9. DASHBOARD COMPONENT
// ===============================
function Dashboard({
  users,
  cities,
  search,
  setSearch,
  cityFilter,
  setCityFilter,
  sort,
  setSort,
  name,
  setName,
  email,
  setEmail,
  busy,
  message,
  addUser,
  updateUser,
  replaceUser,
  deleteUser,
}) {
  // Context: access global data without passing it through every level
  const context = useContext(UserContext);

  return (
    <main style={{ maxWidth: 900, margin: "30px auto", padding: 20 }}>
      <h1>User Management Dashboard</h1>

      <p>Total users: {context.users.length}</p>

      <h2>Add User (POST)</h2>

      <form onSubmit={addUser}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button disabled={busy}>
          {busy ? "Saving..." : "Add User"}
        </button>
      </form>

      {message && <p role="status">{message}</p>}

      <h2>Search and Filter</h2>

      <input
        placeholder="Search name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={cityFilter}
        onChange={(e) => setCityFilter(e.target.value)}
      >
        <option value="all">All cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="asc">Name A-Z</option>
        <option value="desc">Name Z-A</option>
      </select>

      <button
        onClick={() => {
          setSearch("");
          setCityFilter("all");
          setSort("asc");
        }}
      >
        Reset filters
      </button>

      <h2>Users</h2>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map((user) => (
          <article
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: 15,
              margin: "12px 0",
              borderRadius: 8,
            }}
          >
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>City: {user.address?.city || "Unknown"}</p>

            <button onClick={() => updateUser(user)}>
              PATCH Update
            </button>{" "}

            <button onClick={() => replaceUser(user)}>
              PUT Replace
            </button>{" "}

            <button onClick={() => deleteUser(user)}>
              DELETE
            </button>
          </article>
        ))
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

