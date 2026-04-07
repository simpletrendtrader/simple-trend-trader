import { Router } from 'express';
import {
  createVideo,
  deleteVideo,
  listVideos,
  updateVideo
} from '../controllers/education.controller.js';
import { protect, requireAdmin } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', protect, listVideos);
router.post('/', protect, requireAdmin, createVideo);
router.put('/:id', protect, requireAdmin, updateVideo);
router.delete('/:id', protect, requireAdmin, deleteVideo);

export default router;
