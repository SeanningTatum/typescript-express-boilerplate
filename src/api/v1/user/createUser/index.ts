import { Response, Request } from 'express';

import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { body } from 'express-validator';
import { UserModel } from '~/models/User';
import { GenericReturn } from '~/types/Return';

interface RequestBody {
  username: string;
  password: string;
}

type ReturnValue = GenericReturn<UserModel>

export const createUserParams = [
  body('username').exists({ checkNull: true, checkFalsy: true }),
  body('password').exists({ checkNull: true, checkFalsy: true }),
];

function createUser(req: Request<{}, {}, RequestBody>, res: Response<ReturnValue>) {
  return res.status(StatusCodes.OK).json({
    code: StatusCodes.OK,
    message: ReasonPhrases.OK,
    body: {
      id: 'testValue',
      ...req.body,
    },
  });
}

export default createUser;
