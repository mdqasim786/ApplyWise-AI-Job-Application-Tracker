import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import {
  getJobs,
  getJobById,
  saveJob,
  unsaveJob,
  getSavedJobs,
  applyToJob,
  getMyApplications,
  withdrawApplication 
} from '../controllers/jobs.controller.js';

const router = express.Router();

// Public routes
router.get('/', getJobs);
router.get('/:id', getJobById);

// Protected routes
router.post('/save', authMiddleware, saveJob);
router.delete('/save/:jobId', authMiddleware, unsaveJob);
router.get('/saved/all', authMiddleware, getSavedJobs);
router.post('/apply', authMiddleware, applyToJob);
router.get('/applications/my', authMiddleware, getMyApplications);
router.delete('/applications/:applicationId', authMiddleware, withdrawApplication);

export default router;