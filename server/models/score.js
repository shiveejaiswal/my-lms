const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' },
  total_score: { type: Number, default: 0 }
});

module.exports = mongoose.model('Score', scoreSchema);
