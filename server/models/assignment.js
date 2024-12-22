const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema(
  {
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Candidate',
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    status: {
      type: String,
      enum: ['Assigned', 'Completed', 'In Progress'],
      default: 'Assigned',
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
