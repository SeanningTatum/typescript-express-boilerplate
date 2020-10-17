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
 *        description: Invalid Request Body
 *
 */
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
      body: user,
    });
  } catch (error) {
    return res.status(error.code).json({
      code: error.code,
      message: error.message,
    });
  }
}

export default createUser;
