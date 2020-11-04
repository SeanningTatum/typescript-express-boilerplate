import { Response, Request } from 'express';
import { body } from 'express-validator';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import User, { IUser } from '~/models/User';
import { DuplicateError, GenericError } from '~/types/Error';
import { GenericReturn } from '~/types/Return';

interface RequestBody {
  email: string;
  password: string
}

type ReturnValue = GenericReturn<IUser> | GenericError

export const createUserParams = [
  body('email').exists({ checkNull: true, checkFalsy: true }),
  body('password').exists({ checkNull: true, checkFalsy: true }),
];

async function createUser(req: Request<{}, {}, RequestBody>, res: Response<ReturnValue>) {
  try {
    const user = await User.create({ ...req.body });

    return res.status(StatusCodes.OK).json({
      code: StatusCodes.OK,
      message: ReasonPhrases.OK,
      data: user,
    });
  } catch (error) {
    if (error instanceof DuplicateError) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send({
        code: StatusCodes.UNPROCESSABLE_ENTITY,
        message: 'User with email already exists!',
      });
    }

    return res.status(error.code).json({
      code: error.code,
      message: error.message,
    });
  }
}

export default createUser;
