import { Response, Request } from 'express';
import { body } from 'express-validator';

import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { GenericReturn } from '~/types/Return';
import { DuplicateError, GenericError } from '~/types/Error';
import UserController from '~/controller/User';

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
  res: Response<GenericError | ReturnValue>,
) {
  try {
    const newUser = await UserController.createUser(req.body);

    return res.status(StatusCodes.OK).json({
      code: StatusCodes.OK,
      message: ReasonPhrases.OK,
      body: newUser,
    });
  } catch (error) {
    // Validation Errors
    if (error.code && error.name) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: error.name,
        body: error,
      });
    }

    if (error instanceof DuplicateError) {
      return res.status(StatusCodes.CONFLICT).json({
        code: StatusCodes.CONFLICT,
        message: ReasonPhrases.CONFLICT,
        body: error,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      body: error,
    });
  }
}

export default createUser;
