import Job from '../models/job.model.js';
import Application from '../models/application.model.js';
import SavedJob from '../models/savedJob.model.js';

// Get all jobs with filters
export const getJobs = async (req, res) => {
  try {
    const { search, location, jobType, page = 1, limit = 10 } = req.query;

    const query = { isActive: true };

    // Search filter
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }

    // Location filter
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }

    // Job type filter
    if (jobType && jobType !== 'All') {
      query.jobType = jobType;
    }

    const jobs = await Job.find(query)
      .sort({ postedDate: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Job.countDocuments(query);

    return res.status(200).json({
      jobs,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalJobs: count
    });
  } catch (error) {
    console.error("Get jobs error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Get single job details
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    return res.status(200).json(job);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

// Save/bookmark a job
export const saveJob = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { jobId } = req.body;

    // Check if already saved
    const alreadySaved = await SavedJob.findOne({ userId, jobId });
    if (alreadySaved) {
      return res.status(400).json({ message: "Job already saved" });
    }

    const savedJob = await SavedJob.create({ userId, jobId });

    return res.status(201).json({
      message: "Job saved successfully",
      savedJob
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

// Unsave a job
export const unsaveJob = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { jobId } = req.params;

    await SavedJob.findOneAndDelete({ userId, jobId });

    return res.status(200).json({ message: "Job unsaved" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

// Get saved jobs
export const getSavedJobs = async (req, res) => {
  try {
    const userId = req.user.userId;

    const savedJobs = await SavedJob.find({ userId })
      .populate('jobId')
      .sort({ savedDate: -1 });

    return res.status(200).json(savedJobs);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

// Apply to a job
export const applyToJob = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { jobId, coverLetter, resumeUsed } = req.body;

    // Check if already applied
    const alreadyApplied = await Application.findOne({ userId, jobId });
    if (alreadyApplied) {
      return res.status(400).json({ message: "Already applied to this job" });
    }

    const application = await Application.create({
      userId,
      jobId,
      coverLetter,
      resumeUsed
    });

    return res.status(201).json({
      message: "Application submitted successfully",
      application
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

// Get user's applications
export const getMyApplications = async (req, res) => {
  try {
    const userId = req.user.userId;

    const applications = await Application.find({ userId })
      .populate('jobId')
      .sort({ appliedDate: -1 });

    return res.status(200).json(applications);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};