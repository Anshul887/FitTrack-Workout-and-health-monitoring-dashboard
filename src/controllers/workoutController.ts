import { Response } from 'express';

import Workout from '../models/Workout';
import { AuthRequest } from '../middleware/authMiddleware';

export const createWorkout = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const workout = await Workout.create({
      ...req.body,
      user: req.user.id
    });

    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getWorkouts = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const workouts = await Workout.find({
      user: req.user.id
    });

    res.json(workouts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateWorkout = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const workout = await Workout.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );

    res.json(workout);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteWorkout = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);

    res.json({
      message: 'Workout deleted'
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
