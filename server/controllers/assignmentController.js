const Assignment = require('../models/assignment');

const getAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find().populate('project candidate');
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const updateAssignmentStatus = async (req, res) => {
    const assignmentId = req.params.assignmentId;
    try {
        const updatedAssignment = await Assignment.findByIdAndUpdate(assignmentId, req.body, { new: true });
        res.status(200).json(updatedAssignment);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getAssignments, updateAssignmentStatus };
