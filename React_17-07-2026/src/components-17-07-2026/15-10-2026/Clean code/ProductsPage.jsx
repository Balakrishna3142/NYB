
import useProducts from "./useProducts";
import ProductList from "./ProductList";

export default function ProductsPage() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return <ProductList products={products} />;
}
