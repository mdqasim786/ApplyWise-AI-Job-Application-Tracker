import { upload } from '../middleware/upload.middleware.js';

router.post('/settings/resume', protect, upload.single('resume'), uploadResume);