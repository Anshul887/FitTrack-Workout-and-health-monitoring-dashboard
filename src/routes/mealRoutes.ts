import express from 'express';

import authMiddleware from '../middleware/authMiddleware';

import { createMeal } from '../controllers/mealController';

const router = express.Router();

router.post('/', authMiddleware, createMeal);

export default router;
