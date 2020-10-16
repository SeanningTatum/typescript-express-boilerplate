import { Router } from 'express';
/* PLOP_INJECT_IMPORT */
import userRoutes from './user/user.routes';

const router = Router();

/* PLOP_INJECT_ROUTE */
router.use('/user', userRoutes);

export default router;
