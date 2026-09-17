// Selecting an element
let title = document.getElementById("title");

// Reading and updating DOM property
title.textContent = "Student Management System";


// Creating and adding an element
function addStudent() {

    // Selecting input element
    let input = document.getElementById("studentName");

    // Reading input value
    let name = input.value;

    if (name === "") {
        alert("Please enter a student name");
        return;
    }

    // Creating new element
    let li = document.createElement("li");

    // Updating content
    li.textContent = name;

    // Adding element
    document.getElementById("studentList").appendChild(li);

    // Clear input
    input.value = "";
}


// Removing an element
function removeStudent() {

    let list = document.getElementById("studentList");

    // DOM traversing: accessing last child
    let lastStudent = list.lastElementChild;

    if (lastStudent) {
        lastStudent.remove();
    }
}


// DOM Traversing
function showParent() {

    let list = document.getElementById("studentList");

    // Access parent element
    let parent = list.parentElement;

    document.getElementById("output").textContent =
        "Parent element is: " + parent.tagName;
}