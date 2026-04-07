import Signal from '../models/Signal.js';

const maskSignal = (signal) => ({
  ...signal.toObject(),
  entry: 'VIP only',
  stopLoss: 'VIP only',
  target: 'VIP only',
  notes: 'Upgrade to VIP to unlock this trade setup',
  locked: true
});

export const listSignals = async (req, res) => {
  const signals = await Signal.find().sort({ createdAt: -1 }).populate('createdBy', 'name');
  const canViewVip = req.user?.membership === 'vip' || req.user?.role === 'admin';

  const formattedSignals = signals.map((signal) => {
    if (signal.vipOnly && !canViewVip) {
      return maskSignal(signal);
    }

    return {
      ...signal.toObject(),
      locked: false
    };
  });

  res.json({ signals: formattedSignals });
};

export const createSignal = async (req, res) => {
  const signal = await Signal.create({
    ...req.body,
    createdBy: req.user._id
  });

  res.status(201).json({ signal });
};

export const updateSignal = async (req, res) => {
  const signal = await Signal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!signal) {
    return res.status(404).json({ message: 'Signal not found' });
  }

  res.json({ signal });
};

export const deleteSignal = async (req, res) => {
  const signal = await Signal.findByIdAndDelete(req.params.id);

  if (!signal) {
    return res.status(404).json({ message: 'Signal not found' });
  }

  res.json({ message: 'Signal deleted' });
};
