import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    membership: {
      type: String,
      enum: ['free', 'vip'],
      default: 'free'
    },
    winRate: {
      type: Number,
      default: 0
    },
    tradesTaken: {
      type: Number,
      default: 0
    },
    journalStreak: {
      type: Number,
      default: 0
    },
    resetPasswordToken: {
      type: String,
      default: null
    },
    resetPasswordExpiresAt: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('User', userSchema);
