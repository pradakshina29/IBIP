// src/api.js
const BASE_URL = "https://your-backend.vercel.app"; // your backend Vercel URL

export const getTasks = async () => {
  const res = await fetch(`${BASE_URL}/tasks`);
  return await res.json();
};

export const addTask = async (taskName) => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: taskName, done: false })
  });
  return await res.json();
};
