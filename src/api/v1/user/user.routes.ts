import { Router } from 'express';
import validate from '~/utils/validate';
import getUser, { getUserParams } from './getUser';

const router = Router();

router.post('/getUser/:id', validate(getUserParams), getUser);

export default router;
