import AdminDashboard from "./AdminDashboard";
import withAuthorization from "./withAuthorization";

const ProtectedAdminDashboard =
  withAuthorization(AdminDashboard, "admin");

function App() {
  return (
    <ProtectedAdminDashboard userRole="admin" />
  );
}

export default App;