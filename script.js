// ==========================
// To-Do List JS (Text Only)
// ==========================

// DOM Elements
const list = document.getElementById("todoList");
const statusDiv = document.getElementById("taskStatus");
const input = document.getElementById("taskInput");
const API = "https://your-backend.vercel.app/api/todos";

// Store todos locally
let todos = [];

// ==========================
// Render all todos
// ==========================
function renderTodos() {
  list.innerHTML = "";
  let completedCount = 0;

  todos.forEach((t, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    // Add task text only
    li.textContent = t.title;

    // Completed styling
    if (t.completed) {
      li.classList.add("completed");
      completedCount++;
    }

    // Click to toggle completed
    li.onclick = () => {
      todos[index].completed = !todos[index].completed;
      renderTodos();
    };

    // Right-click to delete
    li.oncontextmenu = (e) => {
      e.preventDefault();
      todos.splice(index, 1);
      renderTodos();
    };

    list.appendChild(li);
  });

  statusDiv.textContent = `${completedCount} of ${todos.length} tasks completed`;
}

// ==========================
// Add a new todo
// ==========================
function addTask() {
  const title = input.value.trim();
  if (!title) return;

  todos.push({ title, completed: false });
  input.value = "";
  renderTodos();
}

// ==========================
// Event Listeners
// ==========================
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// ==========================
// Initial Render
// ==========================
renderTodos();
