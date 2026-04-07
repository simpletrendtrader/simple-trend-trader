import mongoose from 'mongoose';

const journalEntrySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    date: {
      type: String,
      required: true
    },
    mood: {
      type: String,
      default: 'Focused'
    },
    tradesTaken: {
      type: Number,
      default: 0
    },
    pnl: {
      type: Number,
      default: 0
    },
    mistakes: {
      type: String,
      default: ''
    },
    lessons: {
      type: String,
      default: ''
    },
    plan: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

journalEntrySchema.index({ user: 1, date: 1 }, { unique: true });

export default mongoose.model('JournalEntry', journalEntrySchema);
