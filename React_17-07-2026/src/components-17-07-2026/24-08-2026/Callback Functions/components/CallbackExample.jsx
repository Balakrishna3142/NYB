function CallbackExample({ onMessage }) {
  return (
    <div>
      <h2>Callback Function Example</h2>
      <button onClick={() => onMessage("Hello from Child Component!")}>
        Send Message
      </button>
    </div>
  );
}

export default CallbackExample;