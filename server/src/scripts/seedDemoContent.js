import dotenv from 'dotenv';
import { connectDatabase } from '../config/db.js';
import EducationVideo from '../models/EducationVideo.js';
import Signal from '../models/Signal.js';
import User from '../models/User.js';

dotenv.config();

const run = async () => {
  await connectDatabase();

  const admin = await User.findOne({ role: 'admin' });

  if (!admin) {
    throw new Error('Create an admin first with npm run seed:admin --workspace server');
  }

  const signalCount = await Signal.countDocuments();
  const videoCount = await EducationVideo.countDocuments();

  if (!signalCount) {
    await Signal.insertMany([
      {
        pair: 'XAUUSD',
        entry: '2362 - 2365',
        stopLoss: '2352',
        target: '2384',
        bias: 'Buy',
        status: 'Open',
        vipOnly: false,
        notes: 'London session continuation setup',
        createdBy: admin._id
      },
      {
        pair: 'BTCUSD',
        entry: '68200',
        stopLoss: '67150',
        target: '70400',
        bias: 'Buy',
        status: 'Open',
        vipOnly: true,
        notes: 'Breakout retest with momentum confirmation',
        createdBy: admin._id
      }
    ]);
    console.log('Demo signals created');
  }

  if (!videoCount) {
    await EducationVideo.insertMany([
      {
        title: 'Trend Structure Masterclass',
        category: 'Market Structure',
        description: 'How SIMPLE TREND TRADER reads direction and key continuation zones.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        vipOnly: false
      },
      {
        title: 'VIP Entry Precision Workshop',
        category: 'Execution',
        description: 'Advanced entry tactics, confirmation logic, and risk control.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        vipOnly: true
      }
    ]);
    console.log('Demo education videos created');
  }

  process.exit(0);
};

run().catch((error) => {
  console.error('Failed to seed demo content', error);
  process.exit(1);
});
