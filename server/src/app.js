import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import billingRoutes from './routes/billing.routes.js';
import educationRoutes from './routes/education.routes.js';
import journalRoutes from './routes/journal.routes.js';
import passwordRoutes from './routes/password.routes.js';
import signalRoutes from './routes/signal.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',') : true,
    credentials: true
  })
);
app.use(express.json({ limit: '2mb' }));
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'simple-trend-trader-api' });
});

app.use('/api/auth', authRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/signals', signalRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/journal', journalRoutes);
app.use('/api/users', userRoutes);
app.use('/api/password', passwordRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    message: err.message || 'Internal server error'
  });
});

export default app;
