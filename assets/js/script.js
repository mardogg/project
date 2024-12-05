/* DEVELOPER: Your Name, IS117-xxx, Spring 2024 */

// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add task to the list
addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create task item
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="btn btn-success btn-sm complete-task">✔</button>
            <button class="btn btn-danger btn-sm delete-task">✘</button>
        </div>
    `;
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
});

// Handle task completion and deletion
taskList.addEventListener('click', function (e) {
    if (e.target.classList.contains('complete-task')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }

    if (e.target.classList.contains('delete-task')) {
        e.target.parentElement.parentElement.remove();
    }
});
