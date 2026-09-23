
// ARRAYS AND OBJECTS


let students = [
    {
        id: 1,
        name: "Rahul",
        marks: 85
    },
    {
        id: 2,
        name: "Priya",
        marks: 92
    },
    {
        id: 3,
        name: "Arun",
        marks: 75
    }
];



//  DOM MANIPULATION


const nameInput = document.getElementById("nameInput");
const marksInput = document.getElementById("marksInput");
const addBtn = document.getElementById("addBtn");
const fetchBtn = document.getElementById("fetchBtn");
const searchInput = document.getElementById("searchInput");

const studentList = document.getElementById("studentList");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const empty = document.getElementById("empty");


//  REUSABLE FUNCTION


function showMessage(element, message) {
    element.textContent = message;
}



//  DYNAMIC DATA RENDERING


function renderStudents(data) {

    // Clear previous data
    studentList.innerHTML = "";

    // Empty State
    if (data.length === 0) {
        showMessage(empty, "No students found.");
        return;
    }

    empty.textContent = "";

    // Create HTML dynamically
    data.forEach(student => {

        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${student.name}</h3>
            <p>Marks: ${student.marks}</p>
            <p>Grade: ${getGrade(student.marks)}</p>
            <hr>
        `;

        studentList.appendChild(div);
    });
}


// -----------------------------------------------------
// 5. FUNCTION
// -----------------------------------------------------

function getGrade(marks) {

    if (marks >= 90) {
        return "A";
    } 
    else if (marks >= 75) {
        return "B";
    } 
    else if (marks >= 60) {
        return "C";
    } 
    else {
        return "D";
    }
}


// -----------------------------------------------------
// 6. SEARCH AND FILTER
// -----------------------------------------------------

function searchStudents() {

    const searchText = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchText)
    );

    renderStudents(filteredStudents);
}


// -----------------------------------------------------
// 7. EVENT HANDLING
// -----------------------------------------------------

searchInput.addEventListener("input", searchStudents);


// -----------------------------------------------------
// 8. LOCAL STORAGE
// -----------------------------------------------------

function saveToLocalStorage() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}


function loadFromLocalStorage() {

    const savedStudents = localStorage.getItem("students");

    if (savedStudents) {
        students = JSON.parse(savedStudents);
    }
}


// -----------------------------------------------------
// 9. ADD STUDENT
// -----------------------------------------------------

function addStudent() {

    const name = nameInput.value.trim();
    const marks = Number(marksInput.value);

    // Error handling / validation
    if (name === "" || marks < 0 || marks > 100) {

        showMessage(
            error,
            "Please enter a valid name and marks between 0 and 100."
        );

        return;
    }

    error.textContent = "";

    // ES6 object shorthand
    const newStudent = {
        id: Date.now(),
        name,
        marks
    };

    students.push(newStudent);

    // Save to Local Storage
    saveToLocalStorage();

    // Render updated data
    renderStudents(students);

    // Clear input fields
    nameInput.value = "";
    marksInput.value = "";
}


// -----------------------------------------------------
// 10. EVENT HANDLING - ADD BUTTON
// -----------------------------------------------------

addBtn.addEventListener("click", addStudent);


// -----------------------------------------------------
// 11. GET API - FETCH STUDENTS
// -----------------------------------------------------

async function fetchStudents() {

    showMessage(loading, "Loading students...");
    error.textContent = "";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // Check HTTP error
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        // Convert API data to our student format
        students = data.map(user => ({
            id: user.id,
            name: user.name,
            marks: Math.floor(Math.random() * 41) + 60
        }));

        // Save API data
        saveToLocalStorage();

        // Display data
        renderStudents(students);

    } 
    catch (err) {

        showMessage(
            error,
            "Error: " + err.message
        );

    } 
    finally {

        // Loading State ends
        loading.textContent = "";
    }
}


// -----------------------------------------------------
// 12. GET API BUTTON
// -----------------------------------------------------

fetchBtn.addEventListener("click", fetchStudents);


// -----------------------------------------------------
// 13. POST API - MODIFICATION OPERATION
// -----------------------------------------------------

async function addStudentToAPI(student) {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: student.name,
                    body: `Marks: ${student.marks}`,
                    userId: student.id
                })
            }
        );

        if (!response.ok) {
            throw new Error("Failed to add student to API");
        }

        const result = await response.json();

        console.log("Student added to API:", result);

    } 
    catch (err) {

        console.error(
            "API Error:",
            err.message
        );
    }
}


// -----------------------------------------------------
// 14. PROMISE EXAMPLE
// -----------------------------------------------------

function delay(ms) {

    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}


// -----------------------------------------------------
// 15. INITIALIZATION
// -----------------------------------------------------

async function initializeApp() {

    // Load saved students
    loadFromLocalStorage();

    // Display students
    renderStudents(students);

    // Example Promise
    await delay(500);

    console.log("Application initialized");
}


// Start application
initializeApp();