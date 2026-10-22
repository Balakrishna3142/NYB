
import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://dummyjson.com/products";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState(null);

  // GET: Fetch products
  async function getProducts() {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(API);
      setProducts(response.data.products);
    } catch (err) {
      setError(err.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  // POST: Add product, PUT: Replace, PATCH: Update
  async function saveProduct(e) {
    e.preventDefault();

    if (!title.trim() || price === "" || Number(price) <= 0) {
      alert("Enter a title and a valid price");
      return;
    }

    const product = {
      title: title.trim(),
      price: Number(price),
    };

    try {
      if (editId === null) {
        const response = await axios.post(
          `${API}/add`,
          product
        );

        // DummyJSON simulates creation, so update local state.
        setProducts((prev) => [
          { ...product, id: response.data.id ?? Date.now() },
          ...prev,
        ]);
      } else {
        const response = await axios.patch(
          `${API}/${editId}`,
          product
        );

        setProducts((prev) =>
          prev.map((item) =>
            item.id === editId
              ? { ...item, ...response.data, ...product }
              : item
          )
        );
      }

      setTitle("");
      setPrice("");
      setEditId(null);
    } catch (err) {
      alert(err.message || "Failed to save product");
    }
  }

  // PUT: Replace complete product
  async function replaceProduct(id) {
    const current = products.find((p) => p.id === id);
    if (!current) return;

    try {
      const response = await axios.put(`${API}/${id}`, {
        title: current.title,
        price: current.price,
        description: current.description || "",
        category: current.category || "general",
      });

      alert(`PUT successful: ${response.data.title}`);
    } catch (err) {
      alert(err.message || "Failed to replace product");
    }
  }

  // DELETE: Remove product
  async function deleteProduct(id) {
    if (!window.confirm("Delete this product?")) return;

    try {
      await axios.delete(`${API}/${id}`);

      setProducts((prev) =>
        prev.filter((product) => product.id !== id)
      );
    } catch (err) {
      alert(err.message || "Failed to delete product");
    }
  }

  // SEARCH + FILTER
  let result = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "all") {
    result = result.filter(
      (product) => product.category === category
    );
  }

  // SORT
  if (sort === "low") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    result.sort((a, b) => b.price - a.price);
  } else if (sort === "name") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  }

  // LOADING STATE
  if (loading) return <h2>Loading products...</h2>;

  // ERROR STATE
  if (error) {
    return (
      <div>
        <h2>Error: {error}</h2>
        <button onClick={getProducts}>Retry</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1>Product Management</h1>

      {/* CREATE / UPDATE FORM */}
      <form onSubmit={saveProduct} style={styles.form}>
        <input
          placeholder="Product name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          min="0.01"
          step="any"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">
          {editId === null ? "Add Product (POST)" : "Update (PATCH)"}
        </button>

        {editId !== null && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setTitle("");
              setPrice("");
            }}
          >
            Cancel
          </button>
        )}
      </form>

      {/* SEARCH */}
      <input
        style={styles.search}
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTER */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All categories</option>
        {[...new Set(products.map((p) => p.category))]
          .filter(Boolean)
          .sort()
          .map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>

      {/* SORT */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="default">Default order</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="name">Name: A to Z</option>
      </select>

      <p>Products found: {result.length}</p>

      {/* EMPTY STATE */}
      {result.length === 0 ? (
        <h3>No products found.</h3>
      ) : (
        result.map((product) => (
          <div key={product.id} style={styles.card}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>

            <button
              onClick={() => {
                setEditId(product.id);
                setTitle(product.title);
                setPrice(String(product.price));
              }}
            >
              Edit
            </button>{" "}

            <button onClick={() => replaceProduct(product.id)}>
              PUT
            </button>{" "}

            <button onClick={() => deleteProduct(product.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
  },
  search: {
    marginRight: "10px",
    marginBottom: "15px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    marginTop: "12px",
  },
};
