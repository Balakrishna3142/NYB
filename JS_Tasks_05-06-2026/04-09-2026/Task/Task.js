
// DOM ELEMENTS


const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

const loadUsersButton = document.getElementById("loadUsers");
const userList = document.getElementById("userList");



// LOCAL STORAGE


// Get tasks from Local Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];



// DISPLAY TASKS


function displayTasks(taskArray = tasks) {

    taskList.innerHTML = "";

    taskArray.forEach(function(task, index) {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn" data-index="${index}">
                Delete
            </button>
        `;

        taskList.appendChild(li);
    });
}


// Display saved tasks when page loads
displayTasks();



// FORM HANDLING


taskForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Add task to array
    tasks.push(task);

    // Save tasks to Local Storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Display tasks
    displayTasks();

    // Clear input
    taskInput.value = "";
});



// EVENT DELEGATION


taskList.addEventListener("click", function(event) {

    // Check if Delete button was clicked
    if (event.target.classList.contains("delete-btn")) {

        const index = event.target.dataset.index;

        // Remove task
        tasks.splice(index, 1);

        // Update Local Storage
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Display updated tasks
        displayTasks();
    }
});



// SEARCH TASKS

searchInput.addEventListener("input", function() {

    const searchText = searchInput.value.toLowerCase();

    const filteredTasks = tasks.filter(function(task) {

        return task.toLowerCase().includes(searchText);

    });

    displayTasks(filteredTasks);
});



// API CALL


loadUsersButton.addEventListener("click", function() {

    userList.innerHTML = "Loading users...";

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(function(response) {

            if (!response.ok) {
                throw new Error("API request failed");
            }

            return response.json();
        })

        .then(function(users) {

            userList.innerHTML = "";

            users.forEach(function(user) {

                const li = document.createElement("li");

                li.textContent =
                    user.name + " - " + user.email;

                userList.appendChild(li);
            });
        })

        .catch(function(error) {

            userList.innerHTML =
                "Error loading users: " + error.message;
        });
});