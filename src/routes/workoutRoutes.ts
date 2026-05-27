import express from 'express';

import authMiddleware from '../middleware/authMiddleware';

import {
  createWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout
} from '../controllers/workoutController';

const router = express.Router();

router.get('/', authMiddleware, getWorkouts);

router.post('/', authMiddleware, createWorkout);

router.put('/:id', authMiddleware, updateWorkout);

router.delete('/:id', authMiddleware, deleteWorkout);

export default router;
