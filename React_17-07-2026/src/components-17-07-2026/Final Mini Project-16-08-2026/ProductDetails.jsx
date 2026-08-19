import React from "react";
import {
  useParams,
  useNavigate
} from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const products = {
    101: {
      name: "Laptop",
      price: "₹50,000"
    },

    102: {
      name: "Mobile",
      price: "₹25,000"
    },

    103: {
      name: "Headphones",
      price: "₹3,000"
    }
  };

  const product = products[id];

  if (!product) {
    return (
      <div>
        <h3>Product Not Found</h3>

        <button
          onClick={() => navigate("/products")}
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3>Product Details</h3>

      <p>Product ID: {id}</p>

      <p>Name: {product.name}</p>

      <p>Price: {product.price}</p>

      <button
        onClick={() => navigate("/products")}
      >
        Back to Products
      </button>
    </div>
  );
}

export default ProductDetails;