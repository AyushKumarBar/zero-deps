const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: 'Pending' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Ensure this references the User model correctly
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;