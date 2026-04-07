import User from '../models/User.js';
import JournalEntry from '../models/JournalEntry.js';
import Signal from '../models/Signal.js';
import EducationVideo from '../models/EducationVideo.js';
import { sanitizeUser } from '../utils/auth.js';

export const listUsers = async (_req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json({ users: users.map(sanitizeUser) });
};

export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({ user: sanitizeUser(user) });
};

export const getAdminOverview = async (_req, res) => {
  const [users, vipUsers, signals, videos, journals] = await Promise.all([
    User.countDocuments(),
    User.countDocuments({ membership: 'vip' }),
    Signal.countDocuments(),
    EducationVideo.countDocuments(),
    JournalEntry.countDocuments()
  ]);

  res.json({
    metrics: [
      { label: 'Users', value: users },
      { label: 'VIP Members', value: vipUsers },
      { label: 'Signals', value: signals },
      { label: 'Videos', value: videos },
      { label: 'Journal Entries', value: journals }
    ]
  });
};
