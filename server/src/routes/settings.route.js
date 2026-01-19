import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { getSettings, updateSettings, uploadResume } from '../controllers/settings.controller.js';
import { upload } from '../middleware/upload.middleware.js';

const router = express.Router();

router.get('/', authMiddleware, getSettings);
router.put('/', authMiddleware, updateSettings);
router.post('/resume', authMiddleware, upload.single('resume'), uploadResume);

export default router;