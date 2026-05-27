import { Response, NextFunction } from 'express';
import { AuthRequest } from './authMiddleware';
import User from '../models/User';

const adminMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const user = await User.findById(req.user.id);

  if (user?.role !== 'admin') {
    return res.status(403).json({
      message: 'Admin only'
    });
  }

  next();
};

export default adminMiddleware;
