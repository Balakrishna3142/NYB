function ChildOne({ setMessage }) {
  return (
    <div>
      <h2>Child One</h2>

      <button onClick={() => setMessage("Hello from Child One")}>
        Send Message
      </button>
    </div>
  );
}

export default ChildOne;