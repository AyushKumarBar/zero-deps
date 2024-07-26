const mongoose = require('mongoose');

const releaseSchema = new mongoose.Schema({
  version: { type: String, required: true },
  features: { type: [String], required: true },
  improvements: { type: [String], required: true },
  bugFixes: { type: [String], required: true },
  status: { type: String, default: 'planned' },  // statuses: planned, development, testing, released
  releaseDate: { type: Date, required: true },
  stakeholders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Release', releaseSchema);
