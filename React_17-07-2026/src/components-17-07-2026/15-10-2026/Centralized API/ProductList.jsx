
import { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Products</h1>

      {products.slice(0, 10).map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.body}</p>
        </div>
      ))}
    </div>
  );
}
