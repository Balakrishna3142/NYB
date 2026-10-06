function App() {
  const name = "Bala";
  const age = 20;

  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <div className="student">
      <h1>Student Details</h1>

      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;