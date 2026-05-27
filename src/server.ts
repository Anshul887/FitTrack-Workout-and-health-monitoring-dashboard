import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db';

import authRoutes from './routes/authRoutes';
import workoutRoutes from './routes/workoutRoutes';
import mealRoutes from './routes/mealRoutes';
import aiRoutes from './routes/aiRoutes';

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('/api/workouts', workoutRoutes);

app.use('/api/meals', mealRoutes);

app.use('/api/ai', aiRoutes);

app.get('/', (_, res) => {
  res.send('FitTrack API Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
