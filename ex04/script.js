const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskCounter = document.getElementById("taskCounter");
const taskList = document.getElementById("taskList");

let taskCount = 0;

function updateCounter() {
    taskCounter.textContent = "Total Tasks: " + taskCount;
}

function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    const task = document.createElement("li");

    task.textContent = taskText;

    task.addEventListener("click", function () {
        task.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        task.remove();

        taskCount--;

        updateCounter();
    });

    task.appendChild(deleteBtn);

    taskList.appendChild(task);

    taskCount++;

    updateCounter();

    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
