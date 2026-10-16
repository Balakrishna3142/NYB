import { Link, useParams } from "react-router-dom";
import { useEmployees } from "./EmployeeContext";

export default function EmployeeDetails() {
  const { id } = useParams();
  const { employees } = useEmployees();

  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) {
    return <h2>Employee not found</h2>;
  }

  return (
    <div>
      <h1>Employee Details</h1>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Department: {employee.department}</p>
      <p>Salary: ₹{employee.salary}</p>
      <Link to="/employees">Back to Employees</Link>
    </div>
  );
}