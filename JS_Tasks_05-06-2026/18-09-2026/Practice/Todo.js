

// Get saved todos from localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Current filter
let currentFilter = "all";

// ---------- Create Basic HTML ----------
document.body.innerHTML = `
    <div class="todo-container">
        <h1>Todo Application</h1>

        <div>
            <input type="text" id="todoInput" placeholder="Enter a todo">
            <button id="addBtn">Add Todo</button>
        </div>

        <div class="filters">
            <button onclick="filterTodos('all')">All</button>
            <button onclick="filterTodos('active')">Active</button>
            <button onclick="filterTodos('completed')">Completed</button>
        </div>

        <ul id="todoList"></ul>
    </div>
`;

// Get DOM elements
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// ---------- Save to Local Storage ----------
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// ---------- Add Todo ----------
function addTodo() {
    const text = todoInput.value.trim();

    if (text === "") {
        alert("Please enter a todo!");
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(todo);

    saveTodos();
    todoInput.value = "";

    renderTodos();
}

// ---------- Delete Todo ----------
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);

    saveTodos();
    renderTodos();
}

// ---------- Edit Todo ----------
function editTodo(id) {
    const todo = todos.find(todo => todo.id === id);

    const newText = prompt("Edit Todo:", todo.text);

    if (newText !== null && newText.trim() !== "") {
        todo.text = newText.trim();

        saveTodos();
        renderTodos();
    }
}

// ---------- Mark Todo Completed ----------
function toggleTodo(id) {
    const todo = todos.find(todo => todo.id === id);

    todo.completed = !todo.completed;

    saveTodos();
    renderTodos();
}

// ---------- Filter Todos ----------
function filterTodos(filter) {
    currentFilter = filter;
    renderTodos();
}

// ---------- Dynamic DOM Rendering ----------
function renderTodos() {
    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span 
                style="
                    text-decoration: ${todo.completed ? "line-through" : "none"};
                    cursor: pointer;
                "
                onclick="toggleTodo(${todo.id})"
            >
                ${todo.text}
            </span>

            <button onclick="editTodo(${todo.id})">
                Edit
            </button>

            <button onclick="deleteTodo(${todo.id})">
                Delete
            </button>
        `;

        todoList.appendChild(li);
    });
}

// ---------- Button Event ----------
addBtn.addEventListener("click", addTodo);

// Add todo when Enter key is pressed
todoInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

// ---------- Initial Rendering ----------
renderTodos();