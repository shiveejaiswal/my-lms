const express = require('express');
const router = express.Router();
const { getAssignments, updateAssignmentStatus } = require('../controllers/assignmentController');

// Get all assignments
router.get('/', getAssignments);

// Update assignment status
router.put('/:assignmentId', updateAssignmentStatus);

module.exports = router;
