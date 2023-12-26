function addTask() {
  let inputElement = document.getElementById("todoInput");
  let taskText = inputElement.value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  let todoList = document.getElementById("todoList");
  console.log(todoList);

  let taskElement = document.createElement("li");
  taskElement.className = "task";

  let spanElement = document.createElement("span");
  spanElement.textContent = taskText;

  let doneButton = document.createElement("button");
  doneButton.textContent = "√";

  doneButton.onclick = function () {
    markDone(taskElement);
  };

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.className = "delete";
  deleteButton.onclick = function () {
    deleteTask(taskElement);
  };

  taskElement.appendChild(spanElement);
  taskElement.appendChild(doneButton);
  taskElement.appendChild(deleteButton);

  todoList.appendChild(taskElement);

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ name: taskText });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  inputElement.value = "";
}

function markDone(taskElement) {
  taskElement.classList.add("done");
}

function deleteTask(taskElement) {
  taskElement.remove();
}
