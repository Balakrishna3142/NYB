
import ErrorBoundary from "./ErrorBoundary";
import Products from "./Products";

export default function App() {
  return (
    <div>
      <h1>My React Application</h1>

      <ErrorBoundary>
        <Products />
      </ErrorBoundary>

      <p>This is another part of the application.</p>
    </div>
  );
}
