
import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard.jsx"));

function App() {
  return (
    <div>
      <h1>React Suspense Example</h1>

      <Suspense fallback={<h2>Loading Dashboard...</h2>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
