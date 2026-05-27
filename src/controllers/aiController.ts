import { Request, Response } from 'express';

export const generateWorkoutSuggestions = async (
  req: Request,
  res: Response
) => {
  const { goal } = req.body;

  if (goal === 'weight_loss') {
    return res.json([
      'HIIT Cardio',
      'Running',
      'Low Carb Diet'
    ]);
  }

  if (goal === 'muscle_gain') {
    return res.json([
      'Bench Press',
      'Deadlift',
      'High Protein Diet'
    ]);
  }

  res.json(['General Fitness Plan']);
};
