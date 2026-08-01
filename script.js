const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const totalSpan = document.getElementById("total");
const completedSpan = document.getElementById("completed");
const remainingSpan = document.getElementById("remaining");

function updateStatistics() {
  const totalTasks = taskList.children.length;
  const completedTasks = taskList.querySelectorAll(".completed").length;
  const remainingTasks = totalTasks - completedTasks;

  totalSpan.textContent = totalTasks;
  completedSpan.textContent = completedTasks;
  remainingSpan.textContent = remainingTasks;
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const textNode = document.createElement("span");
  textNode.textContent = taskText;

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Done";
  completeBtn.className = "complete-btn";
  completeBtn.addEventListener("click", function () {
    li.classList.toggle("completed");
    updateStatistics();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
    updateStatistics();
  });

  actionsDiv.appendChild(completeBtn);
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(textNode);
  li.appendChild(actionsDiv);

  taskList.appendChild(li);

  taskInput.value = "";
  updateStatistics();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
