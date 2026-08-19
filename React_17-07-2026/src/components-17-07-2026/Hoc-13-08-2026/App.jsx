import withAuth from "./withAuth";
import withLoading from "./withLoading";

// Normal component
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}

// Product component
function Products() {
  return (
    <div>
      <h2>Products</h2>
      <p>Laptop</p>
      <p>Mobile</p>
      <p>Headphones</p>
    </div>
  );
}

// Apply HOCs
const ProtectedDashboard = withAuth(Dashboard);
const LoadingProducts = withLoading(Products);

function App() {
  return (
    <div>
      <h1>Higher Order Components</h1>

      <h3>Authentication HOC</h3>

      <ProtectedDashboard isLoggedIn={true} />

      <hr />

      <h3>Loading HOC</h3>

      <LoadingProducts isLoading={false} />
    </div>
  );
}

export default App;