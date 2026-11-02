
const student = {
    name: "Ravi",
    age: 20,
    course: "JavaScript"
};

const subjects = ["HTML", "CSS", "JavaScript"];

const output = document.getElementById("output");

// Save data
function saveData() {
    localStorage.setItem(
        "student",
        JSON.stringify(student)
    );

    localStorage.setItem(
        "subjects",
        JSON.stringify(subjects)
    );

    sessionStorage.setItem("course", "JavaScript");

    output.textContent = "Data saved successfully!";
}

// Read data
function readData() {
    const studentData = localStorage.getItem("student");
    const subjectsData = localStorage.getItem("subjects");
    const course = sessionStorage.getItem("course");

    if (studentData === null || subjectsData === null) {
        output.textContent = "Please save data first!";
        return;
    }

    const savedStudent = JSON.parse(studentData);
    const savedSubjects = JSON.parse(subjectsData);

    output.replaceChildren();

    const details = [
        "Name: " + savedStudent.name,
        "Age: " + savedStudent.age,
        "Course: " + (course || "Not found"),
        "Subjects: " + savedSubjects.join(", ")
    ];

    details.forEach(function (detail) {
        const p = document.createElement("p");
        p.textContent = detail;
        output.appendChild(p);
    });
}

// Clear data
function clearData() {
    localStorage.removeItem("student");
    localStorage.removeItem("subjects");
    sessionStorage.removeItem("course");

    output.textContent = "Data cleared successfully!";
}

document.getElementById("saveBtn")
    .addEventListener("click", saveData);

document.getElementById("readBtn")
    .addEventListener("click", readData);

document.getElementById("clearBtn")
    .addEventListener("click", clearData);
