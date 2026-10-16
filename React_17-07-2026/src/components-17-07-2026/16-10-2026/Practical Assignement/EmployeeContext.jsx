import { createContext, useContext, useReducer } from "react";

const EmployeeContext = createContext();

const initialState = [
  { id: 1, name: "Ravi", department: "IT", salary: 30000 },
  { id: 2, name: "Priya", department: "HR", salary: 35000 },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { ...action.employee, id: Date.now() }];

    case "DELETE":
      return state.filter((emp) => emp.id !== action.id);

    default:
      return state;
  }
}

export function EmployeeProvider({ children }) {
  const [employees, dispatch] = useReducer(reducer, initialState);

  return (
    <EmployeeContext.Provider value={{ employees, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployees() {
  return useContext(EmployeeContext);
}