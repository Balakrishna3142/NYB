function NormalChild({ name }) {
  console.log("NormalChild Rendered");

  return (
    <div
      style={{
        border: "2px solid red",
        padding: "15px",
        margin: "10px"
      }}
    >
      <h2>Normal Child</h2>
      <p>Name: {name}</p>
    </div>
  );
}

export default NormalChild;