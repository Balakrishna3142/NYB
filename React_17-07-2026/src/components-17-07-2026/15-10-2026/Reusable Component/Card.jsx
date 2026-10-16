
export default function Card({ title, description, price }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px",
        width: "220px",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>₹{price}</h3>
    </div>
  );
}
