import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const hashPassword = async (password) => bcrypt.hash(password, 10);

export const comparePassword = async (password, hashedPassword) =>
  bcrypt.compare(password, hashedPassword);

export const generateToken = (user) =>
  jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });

export const sanitizeUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
  membership: user.membership,
  winRate: user.winRate,
  tradesTaken: user.tradesTaken,
  journalStreak: user.journalStreak,
  createdAt: user.createdAt
});
