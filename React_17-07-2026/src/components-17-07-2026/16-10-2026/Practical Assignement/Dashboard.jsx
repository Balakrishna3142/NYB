import { Link } from "react-router-dom";
import { useEmployees } from "./EmployeeContext";

export default function Dashboard() {
  const { employees } = useEmployees();

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <h3>Total Employees: {employees.length}</h3>
      <Link to="/employees">Manage Employees</Link>
    </div>
  );
}