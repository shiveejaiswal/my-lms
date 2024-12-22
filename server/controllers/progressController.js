const Assignment = require('../models/assignment');
const Score = require('../models/score');

// Get progress and score for an assignment
const getProgress = async (req, res) => {
  const { assignmentId } = req.params;
  try {
    const assignment = await Assignment.findById(assignmentId).populate('candidate').populate('project');
    const score = await Score.findOne({ assignment: assignmentId });
    res.status(200).json({ assignment, score: score ? score.score : 0 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update progress or score for an assignment
const updateProgress = async (req, res) => {
  const { assignmentId } = req.params;
  const { score } = req.body;
  try {
    let assignment = await Assignment.findById(assignmentId);
    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }
    
    const updatedScore = await Score.findOneAndUpdate(
      { assignment: assignmentId },
      { score },
      { upsert: true, new: true }
    );
    
    res.status(200).json({ message: 'Progress updated', score: updatedScore });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProgress, updateProgress };
