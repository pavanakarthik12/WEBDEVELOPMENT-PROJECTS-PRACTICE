const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskEl = document.createElement('div');
    taskEl.className = 'task';

    const name = document.createElement('span');
    name.textContent = task.name;

    const deadline = document.createElement('span');
    deadline.textContent = task.deadline;

    const category = document.createElement('span');
    category.textContent = task.category;

    const priority = document.createElement('span');
    priority.textContent = task.priority;
    priority.classList.add(`priority-${task.priority}`);

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => {
      tasks.splice(index, 1);
      updateTasks();
    };

    taskEl.append(name, deadline, category, priority, delBtn);
    taskList.appendChild(taskEl);
  });
}

function updateTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

taskForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('task-name').value;
  const deadline = document.getElementById('task-deadline').value;
  const category = document.getElementById('task-category').value;
  const priority = document.getElementById('task-priority').value;

  if (!name || !deadline) return;

  tasks.push({ name, deadline, category, priority });
  updateTasks();
  taskForm.reset();
});

function sortBy(type) {
  if (type === 'priority') {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  } else if (type === 'deadline') {
    tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }
  updateTasks();
}

renderTasks();
