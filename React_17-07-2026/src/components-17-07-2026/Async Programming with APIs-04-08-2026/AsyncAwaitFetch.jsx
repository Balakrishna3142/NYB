import { useState } from "react";

function AsyncAwaitFetch() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setPosts(data.slice(0, 5));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Async/Await API Call</h2>

      <button onClick={fetchPosts}>Load Posts</button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading &&
        !error &&
        posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
          </div>
        ))}
    </div>
  );
}

export default AsyncAwaitFetch;