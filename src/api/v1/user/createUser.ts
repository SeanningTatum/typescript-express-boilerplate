import { Response, Request } from 'express';
import { body } from 'express-validator';

import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import UserModel from '~/models/User';
import { GenericReturn } from '~/types/Return';
import { GenericError } from '~/types/Error';

interface RequestBody {
  email: string;
  password: string;
}

interface ReturnValue extends GenericReturn<any> {}

export const createUserParams = [
  body('email').exists({ checkNull: true, checkFalsy: true }),
  body('password').exists({ checkNull: true, checkFalsy: true }),
];

async function createUser(
  req: Request<{}, {}, RequestBody>,
  res: Response<GenericError |ReturnValue>,
) {
  try {
    const user = new UserModel({ email: req.body.email, password: req.body.password });

    const newUser = await user.save();

    return res.status(StatusCodes.OK).json({
      code: StatusCodes.OK,
      message: ReasonPhrases.OK,
      body: newUser.plain(),
    });
  } catch (error) {
    console.error(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}

export default createUser;
