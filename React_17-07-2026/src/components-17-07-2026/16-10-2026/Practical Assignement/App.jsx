import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeProvider } from "./EmployeeContext";
import ProtectedRoute from "./ProtectedRoute";

import Login from "./Login";
import Dashboard from "./Dashboard"
import Employees from "./Employees";
import EmployeeDetails from "./EmployeeDetails";

export default function App() {
  return (
    <EmployeeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route
              path="/employees/:id"
              element={<EmployeeDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </EmployeeProvider>
  );
}