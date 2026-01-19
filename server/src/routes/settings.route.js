import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { getSettings, updateSettings } from '../controllers/settings.controller.js';

const router = express.Router();

router.get('/', authMiddleware, getSettings);
router.put('/api/settings', authMiddleware, updateSettings);

export default router;