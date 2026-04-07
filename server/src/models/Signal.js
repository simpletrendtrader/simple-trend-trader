import mongoose from 'mongoose';

const signalSchema = new mongoose.Schema(
  {
    pair: {
      type: String,
      required: true,
      trim: true
    },
    entry: {
      type: String,
      required: true
    },
    stopLoss: {
      type: String,
      required: true
    },
    target: {
      type: String,
      required: true
    },
    bias: {
      type: String,
      enum: ['Buy', 'Sell'],
      default: 'Buy'
    },
    status: {
      type: String,
      enum: ['Open', 'Hit Target', 'Hit Stop Loss', 'Closed'],
      default: 'Open'
    },
    vipOnly: {
      type: Boolean,
      default: false
    },
    notes: {
      type: String,
      default: ''
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Signal', signalSchema);
