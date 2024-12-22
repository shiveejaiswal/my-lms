const express = require('express');
const { createProject, getAllProjects } = require('../controllers/projectController');

const router = express.Router();

// POST: Create project
router.post('/', createProject);

// GET: Get all projects
router.get('/', getAllProjects);

module.exports = router;
