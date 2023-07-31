// Variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// event listener
addTask.addEventListener('click', function () {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = inputTask.value; // Use backticks (`) for template literals
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if (inputTask.value === "") {
        alert('Don\'t Procrastinate');
    } else {
        taskContainer.appendChild(task); // Add the task to the container if input is not empty
    }

    inputTask.value = ""; // Clear the input field after adding the task
});
