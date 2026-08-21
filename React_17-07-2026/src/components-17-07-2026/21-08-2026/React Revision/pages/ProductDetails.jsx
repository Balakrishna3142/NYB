import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>

      <p>Product ID: {id}</p>

      <p>
        This page uses a dynamic route:
        /products/:id
      </p>

      <Link to="/products">
        Back to Products
      </Link>
    </div>
  );
}

export default ProductDetails;