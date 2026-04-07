import { Router } from 'express';
import { listJournalEntries, upsertJournalEntry } from '../controllers/journal.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', protect, listJournalEntries);
router.post('/', protect, upsertJournalEntry);

export default router;
