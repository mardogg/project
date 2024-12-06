/* DEVELOPER: Marwa Monsour, IS117-001, Fall 2024 */

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

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

    taskInput.value = '';
});

taskList.addEventListener('click', function (e) {
    if (e.target.classList.contains('complete-task')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }

    if (e.target.classList.contains('delete-task')) {
        e.target.parentElement.parentElement.remove();
    }
});
