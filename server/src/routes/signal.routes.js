import { Router } from 'express';
import {
  createSignal,
  deleteSignal,
  listSignals,
  updateSignal
} from '../controllers/signal.controller.js';
import { protect, requireAdmin } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', protect, listSignals);
router.post('/', protect, requireAdmin, createSignal);
router.put('/:id', protect, requireAdmin, updateSignal);
router.delete('/:id', protect, requireAdmin, deleteSignal);

export default router;
