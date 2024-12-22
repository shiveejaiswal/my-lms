const express = require('express');
const { getAvailableProjects, assignProject } = require('../controllers/projectController');
const router = express.Router();

router.get('/', getAvailableProjects);
router.post('/assign', assignProject);

module.exports = router;
