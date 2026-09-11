// Get HTML elements using DOM
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

// Load tasks from Local Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        const li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button class="deleteBtn" data-index="${index}">
                Delete
            </button>
        `;

        taskList.appendChild(li);
    });
}

// Event: Add task
addBtn.addEventListener("click", function() {

    const task = taskInput.value.trim();

    if (task === "") {
        message.textContent = "Please enter a task";
        return;
    }

    // Add task to array
    tasks.push(task);

    // Store tasks in Local Storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    message.textContent = "Task added successfully!";

    displayTasks();
});

// Event Delegation
taskList.addEventListener("click", function(event) {

    if (event.target.classList.contains("deleteBtn")) {

        const index = event.target.getAttribute("data-index");

        // Delete task
        tasks.splice(index, 1);

        // Update Local Storage
        localStorage.setItem("tasks", JSON.stringify(tasks));

        message.textContent = "Task deleted!";

        displayTasks();
    }
});

// Display saved tasks when page loads
displayTasks();