import { Router } from 'express';
import validate from '~/utils/validate';
/* PLOP_INJECT_IMPORT */
import createUser, { createUserParams } from './createUser';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management and login
 */
/* PLOP_INJECT_ROUTE */

router.post('/createUser', validate(createUserParams), createUser);

export default router;
