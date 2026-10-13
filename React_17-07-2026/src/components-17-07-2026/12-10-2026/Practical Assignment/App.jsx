
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// 1. Context API
const ThemeContext = createContext();

// 2. Custom Hook
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// 3. Header Component
function Header({ total, completed }) {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <header>
      <h1>Student Task Manager</h1>
      <p>Total: {total} | Completed: {completed}</p>

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

// 4. Form Component and Validation
function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim().length < 3) {
      setError("Title must have at least 3 characters.");
      return;
    }

    addTask({
      id: Date.now(),
      title: title.trim(),
      completed: false,
    });

    setTitle("");
    setError("");
  }

  return (
    <section>
      <h2>Add Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />

        <button type="submit">Add Task</button>
      </form>

      {error && <p className="error">{error}</p>}
    </section>
  );
}

// 5. Reusable Task Item Component
function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed
            ? "line-through"
            : "none",
        }}
      >
        {task.title}
      </span>

      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

// 6. Task List Component
function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

// 7. Main Application
function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dark, setDark] = useState(false);

  // 8. API Integration using useEffect
  useEffect(() => {
    async function fetchTasks() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );

        if (!response.ok) {
          throw new Error("Failed to load tasks.");
        }

        const data = await response.json();

        setTasks((previous) => {
          const existing = new Set(
            previous.map((task) => String(task.id))
          );

          const newTasks = data
            .filter((item) => !existing.has(`api-${item.id}`))
            .map((item) => ({
              id: `api-${item.id}`,
              title: item.title,
              completed: item.completed,
            }));

          return [...previous, ...newTasks];
        });
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, [setTasks]);

  // 9. Parent-to-Child Communication
  function addTask(task) {
    setTasks((previous) => [task, ...previous]);
  }

  function toggleTask(id) {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((previous) =>
      previous.filter((task) => task.id !== id)
    );
  }

  // 10. Search and Filter
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed);

    return matchesSearch && matchesFilter;
  });

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div className={dark ? "app dark" : "app"}>
        <main className="container">
          <Header
            total={tasks.length}
            completed={completed}
          />

          <TaskForm addTask={addTask} />

          <section>
            <h2>My Tasks</h2>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tasks..."
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Tasks</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>

            {loading && <p>Loading tasks...</p>}
            {error && <p className="error">{error}</p>}

            <TaskList
              tasks={filteredTasks}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          </section>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

// Render the application
createRoot(document.getElementById("root")).render(<App />);
