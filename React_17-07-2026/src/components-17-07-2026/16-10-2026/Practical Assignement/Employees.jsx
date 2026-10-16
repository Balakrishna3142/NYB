import { useState } from "react";
import { Link } from "react-router-dom";
import { useEmployees } from "../context/EmployeeContext";

export default function Employees() {
  const { employees, dispatch } = useEmployees();
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [search, setSearch] = useState("");

  function addEmployee(e) {
    e.preventDefault();

    dispatch({
      type: "ADD",
      employee: {
        name,
        department,
        salary: 25000,
      },
    });

    setName("");
    setDepartment("");
  }

  const filtered = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Employee Management</h1>

      <form onSubmit={addEmployee}>
        <input
          placeholder="Employee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

        <button type="submit">Add Employee</button>
      </form>

      <input
        placeholder="Search employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((emp) => (
        <div key={emp.id}>
          <h3>{emp.name}</h3>
          <p>Department: {emp.department}</p>
          <p>Salary: ₹{emp.salary}</p>

          <Link to={`/employees/${emp.id}`}>View Details</Link>

          <button
            onClick={() => dispatch({ type: "DELETE", id: emp.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}