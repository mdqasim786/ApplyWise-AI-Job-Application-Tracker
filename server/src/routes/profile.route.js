import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { getProfile, updateProfile, changePassword } from '../controllers/profile.controller.js';

const router = express.Router();

router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);
router.put('/profile/password', authMiddleware, changePassword);

export default router;