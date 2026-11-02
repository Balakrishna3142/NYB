
const form = document.getElementById("taskForm");
const titleInput = document.getElementById("taskTitle");
const dateInput = document.getElementById("taskDate");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
const message = document.getElementById("message");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editId = null;

// Save tasks in Local Storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add or update a task
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const date = dateInput.value;

  // Form validation
  if (title === "") {
    message.textContent = "Please enter a task title!";
    return;
  }

  if (editId !== null) {
    const task = tasks.find(t => t.id === editId);
    task.title = title;
    task.date = date;
    editId = null;
    form.querySelector("button").textContent = "Add Task";
    message.textContent = "Task updated successfully!";
  } else {
    tasks.push({
      id: Date.now(),
      title: title,
      date: date,
      completed: false
    });
    message.textContent = "Task added successfully!";
  }

  saveTasks();
  form.reset();
  renderTasks();
});

// Display tasks dynamically
function renderTasks() {
  taskList.innerHTML = "";

  const searchText = searchInput.value.toLowerCase();
  const filter = filterSelect.value;

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchText);
    const matchesFilter =
      filter === "all" ||
      (filter === "pending" && !task.completed) ||
      (filter === "completed" && task.completed);

    return matchesSearch && matchesFilter;
  });

  if (filteredTasks.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No tasks found.";
    taskList.appendChild(li);
    return;
  }

  filteredTasks.forEach(task => {
    const li = document.createElement("li");

    // Task title
    const span = document.createElement("span");
    span.textContent = task.title +
      (task.date ? " (Due: " + task.date + ")" : "");

    if (task.completed) {
      span.style.textDecoration = "line-through";
    }

    li.appendChild(span);

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Undo" : "Complete";
    completeBtn.onclick = function() {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    };
    li.appendChild(completeBtn);

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function() {
      titleInput.value = task.title;
      dateInput.value = task.date || "";
      editId = task.id;
      form.querySelector("button").textContent = "Update Task";
      titleInput.focus();
    };
    li.appendChild(editBtn);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
      tasks = tasks.filter(t => t.id !== task.id);
      saveTasks();
      renderTasks();
      message.textContent = "Task deleted!";
    };
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

// Search event
searchInput.addEventListener("input", renderTasks);

// Filter event
filterSelect.addEventListener("change", renderTasks);

// Show saved tasks when the page loads
renderTasks();
