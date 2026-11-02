

//  CREATE HTML ELEMENTS DYNAMICALLY


const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");

document.getElementById("addBtn").addEventListener("click", function () {
    const value = itemInput.value.trim();

    if (value === "") {
        alert("Please enter an item!");
        return;
    }

    // Create a new HTML element
    const li = document.createElement("li");
    li.textContent = value;

    // Add it to the page
    itemList.appendChild(li);

    itemInput.value = "";
});



//  ADD AND REMOVE CSS CLASSES


const demoText = document.getElementById("demoText");

document.getElementById("styleBtn").addEventListener("click", function () {
    // Adds the class if absent, removes it if present
    demoText.classList.toggle("highlight");
});



//  FORM VALIDATION


document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");

    if (name.length < 2) {
        message.textContent = "Name must have at least 2 characters.";
        message.className = "error";
        return;
    }

    // Simple email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email.";
        message.className = "error";
        return;
    }

    message.textContent = "Form submitted successfully!";
    message.className = "success";
});


// ====================================
// 4. LOCAL STORAGE AND JSON
// ====================================

const STORAGE_KEY = "practiceTasks";

// Retrieve stored data and convert JSON into an array
let tasks = [];

try {
    tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
} catch (error) {
    tasks = [];
}

// Convert the array into JSON and save it
function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Display tasks dynamically
function displayTasks() {
    const taskList = document.getElementById("taskList");

    taskList.replaceChildren();

    tasks.forEach(function (task) {
        const li = document.createElement("li");
        li.textContent = task.text + " ";

        if (task.done) {
            li.classList.add("done");
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.dataset.action = "delete";
        deleteBtn.dataset.id = task.id;

        li.dataset.id = task.id;
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Add a task
document.getElementById("taskBtn").addEventListener("click", function () {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Enter a task!");
        return;
    }

    tasks.push({
        id: Date.now(),
        text: text,
        done: false
    });

    saveTasks();
    displayTasks();
    input.value = "";
});

// Event delegation: one listener handles clicks on task-list children
document.getElementById("taskList").addEventListener("click", function (event) {
    const deleteBtn = event.target.closest('button[data-action="delete"]');

    if (deleteBtn) {
        const id = Number(deleteBtn.dataset.id);
        tasks = tasks.filter(task => task.id !== id);
    } else {
        const li = event.target.closest("li[data-id]");

        if (!li) return;

        const id = Number(li.dataset.id);
        const task = tasks.find(task => task.id === id);

        if (task) {
            task.done = !task.done;
        }
    }

    saveTasks();
    displayTasks();
});

// Display the stored array as JSON
document.getElementById("showJsonBtn").addEventListener("click", function () {
    document.getElementById("output").textContent =
        JSON.stringify(tasks, null, 2);
});

// Remove all stored tasks
document.getElementById("clearBtn").addEventListener("click", function () {
    tasks = [];
    saveTasks();
    displayTasks();
    document.getElementById("output").textContent = "";
});

displayTasks();


// ====================================
// 5. BROWSER TIMERS
// ====================================

let count = 0;
let timer = null;

const counter = document.getElementById("counter");

// setInterval runs repeatedly
document.getElementById("startBtn").addEventListener("click", function () {
    if (timer !== null) return;

    timer = setInterval(function () {
        count++;
        counter.textContent = count;
    }, 1000);
});

// clearInterval stops the timer
document.getElementById("stopBtn").addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
});

// Reset the counter
document.getElementById("resetBtn").addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
    count = 0;
    counter.textContent = count;

    // setTimeout runs once after a delay
    setTimeout(function () {
        console.log("Counter reset!");
    }, 500);
});

// Another browser event: update the clock every second
function updateClock() {
    document.getElementById("clock").textContent =
        "Current time: " + new Date().toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);
