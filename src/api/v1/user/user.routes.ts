import { Router } from 'express';
import validate from '~/utils/validate';
import createUser, { createUserParams } from './createUser';
import getUser, { getUserParams } from './getUser';

const router = Router();

router.get('/getUser/:id', validate(getUserParams), getUser);
router.post('/createUser', validate(createUserParams), createUser);

export default router;
