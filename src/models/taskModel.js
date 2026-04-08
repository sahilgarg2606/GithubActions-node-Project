let tasks = [];

module.exports = {
  getAll: () => tasks,

  getById: (id) => tasks.find(t => t.id === id),

  create: (task) => {
    tasks.push(task);
    return task;
  },

  update: (id, updatedTask) => {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return null;

    tasks[index] = { ...tasks[index], ...updatedTask };
    return tasks[index];
  },

  delete: (id) => {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return null;

    return tasks.splice(index, 1);
  }
};