import JournalEntry from '../models/JournalEntry.js';
import User from '../models/User.js';

const updateUserStats = async (userId) => {
  const entries = await JournalEntry.find({ user: userId });
  const tradesTaken = entries.reduce((sum, entry) => sum + entry.tradesTaken, 0);
  const wins = entries.filter((entry) => entry.pnl > 0).length;
  const winRate = entries.length ? Math.round((wins / entries.length) * 100) : 0;

  await User.findByIdAndUpdate(userId, {
    tradesTaken,
    winRate,
    journalStreak: entries.length
  });
};

export const listJournalEntries = async (req, res) => {
  const entries = await JournalEntry.find({ user: req.user._id }).sort({ date: -1 });
  res.json({ entries });
};

export const upsertJournalEntry = async (req, res) => {
  const { date, ...rest } = req.body;

  if (!date) {
    return res.status(400).json({ message: 'Date is required' });
  }

  const entry = await JournalEntry.findOneAndUpdate(
    { user: req.user._id, date },
    { ...rest, date, user: req.user._id },
    { upsert: true, new: true, runValidators: true }
  );

  await updateUserStats(req.user._id);

  res.status(201).json({ entry });
};
