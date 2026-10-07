function Child({ showMessage }) {
  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={showMessage}>
        Click Me
      </button>
    </div>
  );
}

export default Child;