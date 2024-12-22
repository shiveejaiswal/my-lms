const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  project_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  task_name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'pending' }, // "pending", "completed"
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);
