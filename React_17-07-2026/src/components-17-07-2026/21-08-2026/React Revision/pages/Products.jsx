import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
    },
  ];

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <p>Price: ₹{product.price}</p>

          <Link to={`/products/${product.id}`}>
            View Details
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Products;