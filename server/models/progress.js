const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  task_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
  candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' },
  completion_percentage: { type: Number, required: true },
  date_updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Progress', progressSchema);
