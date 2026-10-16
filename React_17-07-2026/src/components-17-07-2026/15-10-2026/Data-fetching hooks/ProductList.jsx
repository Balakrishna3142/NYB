
import { useProducts } from "./useProducts";

export default function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img
            src={product.image}
            alt={product.title}
            width="100"
          />
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
