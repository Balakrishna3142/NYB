
import useCustom from "./useCustom";

function App() {
  const {
    count,
    increment,
    decrement,
    reset,
    users,
    loading,
    error,
  } = useCustom();

  return (
    <div>
      <h1>Custom Hooks Example</h1>

      <h2>Counter</h2>
      <h3>Count: {count}</h3>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <hr />

      <h2>Users from API</h2>

      {loading && <p>Loading users...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error &&
        users.map((user) => (
          <div key={user.id}>
            <p>{user.name} - {user.email}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
