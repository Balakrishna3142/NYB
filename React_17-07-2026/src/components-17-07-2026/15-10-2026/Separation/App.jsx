
import ProductList from "./ProductList";
import useProducts from "./useProducts";

export default function App() {
  const { products, loading, error } = useProducts();

  return (
    <main>
      <h1>My Store</h1>

      <ProductList
        products={products}
        loading={loading}
        error={error}
      />
    </main>
  );
}
