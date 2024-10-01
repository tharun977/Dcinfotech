const mongoose = require('mongoose');
const ApplicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  resume: String, // Path to uploaded resume
  status: { type: String, default: 'Pending' },
});
module.exports = mongoose.model('Application', ApplicationSchema);
