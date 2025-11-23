document.addEventListener('DOMContentLoaded', function() {

            const todoForm = document.getElementById('todoForm');
            const taskInput = document.getElementById('taskInput');
            const taskList = document.getElementById('taskList');

            let tasks = [
                "Buy groceries",
                "Finish JavaScript test",
                "Go to the gym",
                "Call mom",
                "Pay bills"
            ];


            function renderTasks() {
                taskList.innerHTML = '';

                tasks.forEach((task, index) => {
                    const li = document.createElement('li');
                    li.className = 'list-group-item d-flex justify-content-between align-items-center';

                    li.textContent = task;

                    const removeBtn = document.createElement('button');
                    removeBtn.className = 'btn btn-danger btn-sm';
                    removeBtn.textContent = 'Remove';
                    removeBtn.dataset.index = index;

                    li.appendChild(removeBtn);
                    taskList.appendChild(li);
                });
            }

            todoForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const newTask = taskInput.value.trim();

                if (newTask !== '') {
                    tasks.push(newTask);
                    renderTasks();
                    taskInput.value = '';
                }
            });

            taskList.addEventListener('click', function(event) {
                if (event.target.classList.contains('btn-danger')) {
                    const index = parseInt(event.target.dataset.index, 10);

                    tasks.splice(index, 1);

                    renderTasks();
                }
            });
            renderTasks();
});