
import {
  useState,
  useMemo,
  useCallback,
  memo,
  lazy,
  Suspense,
} from "react";

// Generate 2000 employees
const employees = Array.from({ length: 2000 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
  department: ["IT", "HR", "Finance", "Sales", "Marketing"][i % 5],
  salary: 30000 + (i % 10) * 5000,
  status: i % 4 === 0 ? "Inactive" : "Active",
}));

// Lazy-loaded analytics component
const Analytics = lazy(() =>
  Promise.resolve({
    default: function Analytics() {
      const stats = employees.reduce((result, emp) => {
        result[emp.department] = (result[emp.department] || 0) + 1;
        return result;
      }, {});

      return (
        <section>
          <h2>Department Analytics</h2>
          {Object.entries(stats).map(([department, total]) => (
            <p key={department}>
              {department}: {total} employees
            </p>
          ))}
        </section>
      );
    },
  })
);

// Memoized employee row
const EmployeeRow = memo(function EmployeeRow({ employee }) {
  console.log("Employee row rendered:", employee.id);

  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
      <td>₹{employee.salary.toLocaleString("en-IN")}</td>
      <td>{employee.status}</td>
    </tr>
  );
});

// Memoized summary component
const Summary = memo(function Summary({ total, active, averageSalary }) {
  return (
    <div className="summary">
      <div className="card">
        <h3>Total Employees</h3>
        <h2>{total}</h2>
      </div>
      <div className="card">
        <h3>Active Employees</h3>
        <h2>{active}</h2>
      </div>
      <div className="card">
        <h3>Average Salary</h3>
        <h2>₹{averageSalary.toLocaleString("en-IN")}</h2>
      </div>
    </div>
  );
});

export default function App() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [count, setCount] = useState(0);

  console.log("Dashboard rendered");

  // useMemo: search, filter and sort employees
  const filteredEmployees = useMemo(() => {
    console.log("Filtering and sorting employees");

    return employees
      .filter((emp) => {
        const matchesName = emp.name
          .toLowerCase()
          .includes(search.toLowerCase());

        const matchesDepartment =
          department === "All" || emp.department === department;

        return matchesName && matchesDepartment;
      })
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.salary - b.salary
          : b.salary - a.salary
      );
  }, [search, department, sortOrder]);

  // useMemo: calculate summary statistics
  const summary = useMemo(() => {
    const active = employees.filter(
      (emp) => emp.status === "Active"
    ).length;

    const totalSalary = employees.reduce(
      (sum, emp) => sum + emp.salary,
      0
    );

    return {
      total: employees.length,
      active,
      averageSalary: Math.round(totalSalary / employees.length),
    };
  }, []);

  // useCallback: stable reset function
  const resetFilters = useCallback(() => {
    setSearch("");
    setDepartment("All");
    setSortOrder("asc");
  }, []);

  return (
    <main>
      <h1>Employee Analytics Dashboard</h1>

      <Summary {...summary} />

      <h2>Search and Filter Employees</h2>

      <input
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Salary: Low to High</option>
        <option value="desc">Salary: High to Low</option>
      </select>

      <button onClick={resetFilters}>Reset Filters</button>

      <p>Showing {filteredEmployees.length} employees</p>

      <h2>Employee List</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <EmployeeRow key={employee.id} employee={employee} />
            ))}
          </tbody>
        </table>
      </div>

      <hr />

      <h2>Test Re-rendering</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment Counter
      </button>

      <hr />

      <h2>Analytics</h2>
      <button onClick={() => setShowAnalytics(true)}>
        Load Analytics
      </button>

      {showAnalytics && (
        <Suspense fallback={<p>Loading analytics...</p>}>
          <Analytics />
        </Suspense>
      )}
    </main>
  );
}
