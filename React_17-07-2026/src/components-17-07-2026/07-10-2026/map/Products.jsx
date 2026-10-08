import { products } from "./products";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Products;