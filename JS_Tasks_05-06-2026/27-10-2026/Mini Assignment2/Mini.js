
"use strict";

// 1. Store employee information using objects
const employees = [
    { id: 101, name: "Rahul", department: "IT", age: 25, salary: 45000 },
    { id: 102, name: "Priya", department: "HR", age: 28, salary: 35000 },
    { id: 103, name: "Arjun", department: "Finance", age: 30, salary: 55000 },
    { id: 104, name: "Sneha", department: "IT", age: 26, salary: 60000 },
    { id: 105, name: "Kiran", department: "Marketing", age: 29, salary: 40000 },
    { id: 106, name: "Anjali", department: "HR", age: 27, salary: 30000 },
    { id: 107, name: "Vijay", department: "Finance", age: 32, salary: 70000 },
    { id: 108, name: "Divya", department: "Marketing", age: 24, salary: 50000 }
];

// 2. Display employee list
function displayEmployees(list) {
    const table = document.getElementById("employeeTable");
    const message = document.getElementById("message");

    table.innerHTML = "";
    message.textContent = "";

    if (list.length === 0) {
        message.textContent = "No employees found.";
        return;
    }

    list.forEach(employee => {
        // Destructuring
        const { id, name, department, age, salary } = employee;

        const row = document.createElement("tr");

        [id, name, department, age, salary].forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        table.appendChild(row);
    });
}

// 3. Filter employees by department
function filterByDepartment(department) {
    if (department === "All") {
        return [...employees];
    }

    return employees.filter(
        employee => employee.department === department
    );
}

function filterEmployees() {
    const department = document.getElementById("department").value;
    const result = filterByDepartment(department);

    displayEmployees(result);
    updateSalarySummary(result);
}

// 4. Find employee by ID
function findEmployeeById(id) {
    return employees.find(employee => employee.id === Number(id));
}

function searchEmployee() {
    const id = document.getElementById("employeeId").value;

    if (id.trim() === "") {
        document.getElementById("message").textContent =
            "Please enter an employee ID.";
        return;
    }

    const employee = findEmployeeById(id);

    if (employee) {
        displayEmployees([employee]);
        updateSalarySummary([employee]);
    } else {
        displayEmployees([]);
        updateSalarySummary([]);
    }
}

// 5. Sort employees by salary
function sortEmployeesBySalary(list, order = "asc") {
    // Spread creates a copy before sorting
    return [...list].sort((a, b) => {
        return order === "asc"
            ? a.salary - b.salary
            : b.salary - a.salary;
    });
}

function sortBySalary(order) {
    const department = document.getElementById("department").value;
    const filteredEmployees = filterByDepartment(department);
    const sortedEmployees = sortEmployeesBySalary(
        filteredEmployees, order
    );

    displayEmployees(sortedEmployees);
    updateSalarySummary(sortedEmployees);
}

// 6. Calculate total salary using reduce()
function calculateTotalSalary(list) {
    return list.reduce(
        (total, employee) => total + employee.salary, 0
    );
}

// 7. Calculate average salary using reduce()
function calculateAverageSalary(list) {
    if (list.length === 0) {
        return 0;
    }

    return list.reduce(
        (total, employee) => total + employee.salary, 0
    ) / list.length;
}

// 8. Find highest salary
function findHighestSalary(list) {
    if (list.length === 0) {
        return 0;
    }

    return list.reduce(
        (highest, employee) =>
            Math.max(highest, employee.salary),
        list[0].salary
    );
}

// 9. Find lowest salary
function findLowestSalary(list) {
    if (list.length === 0) {
        return 0;
    }

    return list.reduce(
        (lowest, employee) =>
            Math.min(lowest, employee.salary),
        list[0].salary
    );
}

// 10. Display salary statistics
function updateSalarySummary(list) {
    document.getElementById("totalEmployees").textContent =
        list.length;

    document.getElementById("totalSalary").textContent =
        formatSalary(calculateTotalSalary(list));

    document.getElementById("averageSalary").textContent =
        formatSalary(calculateAverageSalary(list));

    document.getElementById("highestSalary").textContent =
        formatSalary(findHighestSalary(list));

    document.getElementById("lowestSalary").textContent =
        formatSalary(findLowestSalary(list));
}

// Reusable salary formatting function
function formatSalary(amount) {
    return "₹" + amount.toLocaleString("en-IN", {
        maximumFractionDigits: 2
    });
}

// 11. Reset the application to show all employees
function resetView() {
    document.getElementById("employeeId").value = "";
    document.getElementById("department").value = "All";

    displayEmployees(employees);
    updateSalarySummary(employees);
}

// Initialize the application
displayEmployees(employees);
updateSalarySummary(employees);
