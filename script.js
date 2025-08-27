const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("task"));
    if (!tasks) {
      tasks = []; 
    }

function renderTasks() {
    taskList.innerHTML = ""; 
    tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-btn");

    delBtn.addEventListener("click", function () {
        tasks.splice(index, 2); 
        localStorage.setItem("tasks", JSON.stringify(tasks)); 
        renderTasks(); 
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
    });
}

addBtn.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText !== "") {
        tasks.push(taskText); 
        localStorage.setItem("tasks", JSON.stringify(tasks)); 
        renderTasks(); 
        input.value = ""; 
    }
});
renderTasks();