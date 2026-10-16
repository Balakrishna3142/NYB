
function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const appName = import.meta.env.VITE_APP_NAME;

  return (
    <div>
      <h1>{appName}</h1>
      <p>API URL: {apiUrl}</p>
      <p>Mode: {import.meta.env.MODE}</p>
    </div>
  );
}

export default App;
