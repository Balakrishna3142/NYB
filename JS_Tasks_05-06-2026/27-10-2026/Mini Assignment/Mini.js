
const students = [];

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Accept student details
    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();

    // Store marks in an array
    const marks = [
        Number(document.getElementById("m1").value),
        Number(document.getElementById("m2").value),
        Number(document.getElementById("m3").value),
        Number(document.getElementById("m4").value),
        Number(document.getElementById("m5").value)
    ];

    // Validate marks
    if (name === "" || roll === "") {
        alert("Please enter student name and roll number.");
        return;
    }

    if (marks.some(mark => !Number.isFinite(mark) ||
        mark < 0 || mark > 100)) {
        alert("Marks must be between 0 and 100.");
        return;
    }

    // Prevent duplicate roll numbers
    if (students.some(student => student.roll === roll)) {
        alert("This roll number already exists.");
        return;
    }

    // Calculate total and percentage using a loop
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    const percentage = total / marks.length;

    // Determine grade
    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Pass if every subject has at least 35 marks
    const status = marks.every(mark => mark >= 35)
        ? "Pass"
        : "Fail";

    // Store student result in an object
    const student = {
        name: name,
        roll: roll,
        marks: marks,
        total: total,
        percentage: percentage,
        grade: grade,
        status: status
    };

    // Add object to array
    students.push(student);

    // Display all student results
    displayResults();

    // Clear form for the next student
    document.getElementById("studentForm").reset();
});

function displayResults() {
    const table = document.getElementById("resultTable");

    // Clear old rows before displaying updated results
    table.replaceChildren();

    // Loop through all student objects
    for (const student of students) {
        const row = document.createElement("tr");

        const values = [
            student.name,
            student.roll,
            student.total + " / 500",
            student.percentage.toFixed(2) + "%",
            student.grade,
            student.status
        ];

        for (let i = 0; i < values.length; i++) {
            const cell = document.createElement("td");
            cell.textContent = values[i];

            if (i === 5) {
                cell.className =
                    student.status === "Pass" ? "pass" : "fail";
            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}
