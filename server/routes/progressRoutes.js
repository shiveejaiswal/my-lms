const express = require('express');
const { getProgress, updateProgress } = require('../controllers/progressController');

const router = express.Router();

// GET: Get progress and score
router.get('/:assignmentId', getProgress);

// PUT: Update progress or score
router.put('/:assignmentId', updateProgress);

module.exports = router;
