import { Router } from 'express';
import GetUser from './getUser';

const router = Router();

router.post('/getUser/:id', GetUser.perform);

export default router;
