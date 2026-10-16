export default function ProductCard({ name, price }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button>Buy Now</button>
    </div>
  );
}