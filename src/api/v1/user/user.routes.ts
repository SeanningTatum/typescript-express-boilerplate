import { Router } from 'express';
import GetUser from './getUser';

const router = Router();

router.get('/getUser', GetUser.perform);

export default router;
