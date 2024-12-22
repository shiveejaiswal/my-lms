const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  project_name: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  status: { type: String, default: 'available' }, // "available", "assigned"
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
