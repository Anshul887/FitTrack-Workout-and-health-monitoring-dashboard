import express from 'express';

import { generateWorkoutSuggestions } from '../controllers/aiController';

const router = express.Router();

router.post('/suggestions', generateWorkoutSuggestions);

export default router;
