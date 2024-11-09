const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo() {
    const task = todoInput.value.trim();
    if (task === "") {
        alert("enter your task!");
        return;
    }

    const listItem = document.createElement("li");
    listItem.className = "todo-item";

    const taskText = document.createElement("span");
    taskText.textContent = task;
    taskText.onclick = () => {
        taskText.classList.toggle("completed")
    };

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => {
        todoList.removeChild(listItem);
    };

    listItem.appendChild(taskText);
    listItem.appendChild(removeButton);
    todoList.appendChild(listItem);


    todoInput.value = "";
}