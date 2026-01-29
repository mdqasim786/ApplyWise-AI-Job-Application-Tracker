import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  status: {
    type: String,
    enum: ['Applied', 'Under Review', 'Shortlisted', 'Rejected', 'Accepted'],
    default: 'Applied'
  },
  coverLetter: {
    type: String,
    default: ''
  },
  resumeUsed: {
    type: String,
    default: ''
  },
  appliedDate: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export default mongoose.model('Application', applicationSchema);