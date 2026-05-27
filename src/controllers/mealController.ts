import { Response } from 'express';

import Meal from '../models/Meal';
import { AuthRequest } from '../middleware/authMiddleware';

export const createMeal = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const meal = await Meal.create({
      ...req.body,
      user: req.user.id
    });

    res.status(201).json(meal);
  } catch (error) {
    res.status(500).json(error);
  }
};
