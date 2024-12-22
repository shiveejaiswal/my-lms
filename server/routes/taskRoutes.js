const express = require('express');
const { createTask, getTasksByProject } = require('../controllers/taskController');

const router = express.Router();

// POST: Create task
router.post('/', createTask);

// GET: Get tasks by project
router.get('/:projectId', getTasksByProject);

module.exports = router;
