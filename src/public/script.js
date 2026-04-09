const API = '/api/tasks';

async function fetchTasks() {
  const res = await fetch(API);
  const tasks = await res.json();

  const list = document.getElementById('taskList');
  const empty = document.getElementById('emptyState');
  const count = document.getElementById('taskCount');

  list.innerHTML = '';

  if (tasks.length === 0) {
    empty.classList.remove('d-none');
  } else {
    empty.classList.add('d-none');
  }

  count.innerText = `${tasks.length} Tasks`;

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'list-group-item';

    li.innerHTML = `
      <div>
        <input type="checkbox" ${task.completed ? 'checked' : ''} 
          onchange="toggleTask('${task.id}', this.checked)">
        <span class="${task.completed ? 'completed' : ''}">
          ${task.title}
        </span>
      </div>

      <div>
        <span class="badge ${task.completed ? 'bg-success' : 'bg-warning'} me-2">
          ${task.completed ? 'Done' : 'Pending'}
        </span>

        <button class="btn btn-sm btn-danger" onclick="deleteTask('${task.id}')">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    `;

    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById('taskInput');
  const title = input.value.trim();

  if (!title) return alert("Enter task");

  await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });

  input.value = '';
  fetchTasks();
}

async function deleteTask(id) {
  await fetch(`${API}/${id}`, { method: 'DELETE' });
  fetchTasks();
}

async function toggleTask(id, completed) {
  await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  });

  fetchTasks();
}

fetchTasks();