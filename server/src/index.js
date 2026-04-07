import app from './app.js';
import { connectDatabase } from './config/db.js';

const PORT = process.env.PORT || 5000;

const boot = async () => {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`SIMPLE TREND TRADER API running on port ${PORT}`);
  });
};

boot().catch((error) => {
  console.error('Failed to boot server', error);
  process.exit(1);
});
