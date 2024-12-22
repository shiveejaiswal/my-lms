const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema(
  {
    assignment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assignment',
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
