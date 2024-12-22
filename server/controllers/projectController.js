const Project = require('../models/project');
const Assignment = require('../models/Assignment');

// Get available projects
exports.getAvailableProjects = async (req, res) => {
  const projects = await Project.find({ status: 'available' });
  res.json(projects);
};

// Assign a project to a candidate
exports.assignProject = async (req, res) => {
  const { candidateId, projectId } = req.body;
  const assignment = new Assignment({
    candidate_id: candidateId,
    project_id: projectId,
    assignment_status: 'assigned'
  });
  await assignment.save();
  res.json({ message: 'Project assigned' });
};
