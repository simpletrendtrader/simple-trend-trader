import User from '../models/User.js';
import { comparePassword, generateToken, hashPassword, sanitizeUser } from '../utils/auth.js';

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: 'Email already in use' });
  }

  const user = await User.create({
    name,
    email,
    password: await hashPassword(password)
  });

  res.status(201).json({
    token: generateToken(user),
    user: sanitizeUser(user)
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({
    token: generateToken(user),
    user: sanitizeUser(user)
  });
};

export const getProfile = async (req, res) => {
  res.json({ user: sanitizeUser(req.user) });
};
