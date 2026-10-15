
import { useState, useMemo } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Generate 10,000 users
  const users = useMemo(() => {
    return Array.from({ length: 10000 }, (_, index) => ({
      id: index + 1,
      name: `User ${index + 1}`,
      email: `user${index + 1}@example.com`
    }));
  }, []);

  // Search users
  const filteredUsers = useMemo(() => {
    const query = search.toLowerCase();

    return users.filter(
      user =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  }, [users, search]);

  // Pagination
  const pageSize = 50;
  const totalPages = Math.max(
    1,
    Math.ceil(filteredUsers.length / pageSize)
  );

  const currentPage = Math.min(page, totalPages);

  const visibleUsers = useMemo(() => {
    const start = (currentPage - 1) * pageSize;

    return filteredUsers.slice(start, start + pageSize);
  }, [filteredUsers, currentPage]);

  function handleSearch(event) {
    setSearch(event.target.value);
    setPage(1);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Large List Rendering</h1>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={handleSearch}
        style={{
          padding: "10px",
          width: "280px",
          maxWidth: "90%"
        }}
      />

      <p>
        Total matching users: {filteredUsers.length}
      </p>

      <p>
        Showing {visibleUsers.length} users
        on page {currentPage} of {totalPages}
      </p>

      <div>
        {visibleUsers.map(user => (
          <div
            key={user.id}
            style={{
              padding: "10px",
              marginBottom: "8px",
              border: "1px solid #ccc",
              borderRadius: "6px"
            }}
          >
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </div>
        ))}
      </div>

      <button
        disabled={currentPage === 1}
        onClick={() => setPage(p => p - 1)}
      >
        Previous
      </button>

      <span style={{ margin: "0 12px" }}>
        Page {currentPage}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setPage(p => p + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default App;
