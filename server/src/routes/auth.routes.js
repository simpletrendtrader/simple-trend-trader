import { Router } from 'express';
import { getProfile, login, signup } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', protect, getProfile);

export default router;
