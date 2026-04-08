const { v4: uuidv4 } = require('uuid');
const Task = require('../models/taskModel');
const validateTask = require('../utils/validateTask');

exports.getTasks = (req, res) => {
  res.json(Task.getAll());
};

exports.getTask = (req, res, next) => {
  const task = Task.getById(req.params.id);
  if (!task) return next({ status: 404, message: "Task not found" });

  res.json(task);
};

exports.createTask = (req, res, next) => {
  const error = validateTask(req.body);
  if (error) return next({ status: 400, message: error });

  const task = {
    id: uuidv4(),
    title: req.body.title,
    completed: false
  };

  res.status(201).json(Task.create(task));
};

exports.updateTask = (req, res, next) => {
  const updated = Task.update(req.params.id, req.body);
  if (!updated) return next({ status: 404, message: "Task not found" });

  res.json(updated);
};

exports.deleteTask = (req, res, next) => {
  const deleted = Task.delete(req.params.id);
  if (!deleted) return next({ status: 404, message: "Task not found" });

  res.json({ message: "Task deleted" });
};