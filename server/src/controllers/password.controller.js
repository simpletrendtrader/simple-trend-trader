import crypto from 'crypto';
import User from '../models/User.js';
import { hashPassword } from '../utils/auth.js';

const createResetToken = () => crypto.randomBytes(32).toString('hex');
const hashToken = (token) => crypto.createHash('sha256').update(token).digest('hex');

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({
      message: 'If an account exists for that email, a reset link has been generated.'
    });
  }

  const resetToken = createResetToken();
  user.resetPasswordToken = hashToken(resetToken);
  user.resetPasswordExpiresAt = new Date(Date.now() + 1000 * 60 * 30);
  await user.save();

  const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;
  console.log(`Password reset for ${email}: ${resetUrl}`);

  res.json({
    message: 'Password reset link generated. Connect an email provider to send it automatically.',
    resetUrl
  });
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'Password is required' });
  }

  const hashedToken = hashToken(token);
  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpiresAt: { $gt: new Date() }
  });

  if (!user) {
    return res.status(400).json({ message: 'Reset link is invalid or expired' });
  }

  user.password = await hashPassword(password);
  user.resetPasswordToken = null;
  user.resetPasswordExpiresAt = null;
  await user.save();

  res.json({ message: 'Password updated successfully' });
};
