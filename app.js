import { getTasks, addTask } from "./api";
// Fetch tasks on page load
const fetchTasks = async () => {
  const tasks = await getTasks();
  console.log(tasks);  // check tasks
};

// Add a new task
const createTask = async () => {
  const task = await addTask("My New Task");
  console.log(task);  // check newly added task
};

fetchTasks();
createTask();
