import { Router } from 'express';
import { getAdminOverview, listUsers, updateUser } from '../controllers/user.controller.js';
import { protect, requireAdmin } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', protect, requireAdmin, listUsers);
router.get('/admin-overview', protect, requireAdmin, getAdminOverview);
router.put('/:id', protect, requireAdmin, updateUser);

export default router;
