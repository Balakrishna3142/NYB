function ProductCard({ product }) {
  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;