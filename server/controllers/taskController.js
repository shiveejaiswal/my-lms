const Task = require('../models/task');

// Create a new task
const createTask = async (req, res) => {
  const { name, projectId } = req.body;
  try {
    const newTask = new Task({ name, project: projectId });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get tasks by project
const getTasksByProject = async (req, res) => {
  const { projectId } = req.params;
  try {
    const tasks = await Task.find({ project: projectId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTask, getTasksByProject };
