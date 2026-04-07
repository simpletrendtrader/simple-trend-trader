import dotenv from 'dotenv';
import { connectDatabase } from '../config/db.js';
import User from '../models/User.js';
import { hashPassword } from '../utils/auth.js';

dotenv.config();

const [nameArg, emailArg, passwordArg] = process.argv.slice(2);

const name = nameArg || 'Admin User';
const email = emailArg || 'admin@simpletrendtrader.com';
const password = passwordArg || 'Admin@12345';

const run = async () => {
  await connectDatabase();

  const existing = await User.findOne({ email });
  const hashedPassword = await hashPassword(password);

  if (existing) {
    existing.name = name;
    existing.password = hashedPassword;
    existing.role = 'admin';
    existing.membership = 'vip';
    await existing.save();
    console.log(`Updated admin user: ${email}`);
  } else {
    await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'admin',
      membership: 'vip'
    });
    console.log(`Created admin user: ${email}`);
  }

  console.log(`Login email: ${email}`);
  console.log(`Login password: ${password}`);
  process.exit(0);
};

run().catch((error) => {
  console.error('Failed to seed admin user', error);
  process.exit(1);
});
