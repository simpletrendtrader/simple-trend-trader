import { Router } from 'express';
import {
  createCheckoutSession,
  createPortalSession,
  getPlans
} from '../controllers/billing.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/plans', getPlans);
router.post('/checkout', protect, createCheckoutSession);
router.post('/portal', protect, createPortalSession);

export default router;
