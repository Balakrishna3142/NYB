function ProductDetails({ product }) {
  return (
    <div>
      <h2>Product Details</h2>

      <p>Name: {product.name}</p>
      <p>Price: ₹{product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetails;