let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No tasks yet. Add one above!";
    li.className = "empty-message";
    taskList.appendChild(li);
    return;
  }

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""}>
      <span class="${task.completed ? "completed" : ""}">${task.text}</span>
      <button>Delete</button>
    `;

    // toggle completed
    li.querySelector("input").addEventListener("change", () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    // delete
    li.querySelector("button").addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    taskList.appendChild(li);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  tasks.push({ text: text, completed: false });
  saveTasks();
  taskInput.value = "";
  renderTasks();
}

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

renderTasks();
