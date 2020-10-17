import { Response, Request } from 'express';
import { body } from 'express-validator';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import User, { IUser } from '~/models/User';
import { GenericError } from '~/types/Error';
import { GenericReturn } from '~/types/Return';

/**
 * @swagger
 *
 * /api/v1/user/createUser:
 *  post:
 *    tags: [User]
 *    description: Creates a new user
 *    produces: application/json
 *    parameters:
 *      - name: user
 *        in: body
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      200:
 *        description: Success
 *        schema:
 *          $ref: '#/definitions/User'
 *      400:
 *        description: Invalid Body or Params
 *
 */
interface RequestBody {
  email: string;
  password: string
}

type ReturnedUser = Omit<IUser, 'password'>

type ReturnValue = GenericReturn<ReturnedUser> | GenericError

export const createUserParams = [
  body('email').exists({ checkNull: true, checkFalsy: true }),
  body('password').exists({ checkNull: true, checkFalsy: true }),
];

async function createUser(req: Request<{}, {}, RequestBody>, res: Response<ReturnValue>) {
  try {
    // Omit password from user
    const { password, ...user } = await User.create({ ...req.body });

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        code: StatusCodes.NOT_FOUND,
        message: ReasonPhrases.NOT_FOUND,
      });
    }

    return res.status(StatusCodes.OK).json({
      code: StatusCodes.OK,
      message: ReasonPhrases.OK,
      body: user as ReturnedUser,
    });
  } catch (error) {
    return res.status(error.code).json({
      code: error.code,
      message: error.message,
    });
  }
}

export default createUser;
