import { Request, Response } from 'express';
import { body, ValidationChain } from 'express-validator';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import User, { IUser } from '~/models/User';
import { GenericError } from '~/types/Error';
import { GenericReturn } from '~/types/Return';

/**
 * @swagger
 *
 * /api/v1/user/getUser:
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
 *          properties:
 *            email:
 *              type: string
 *    responses:
 *      200:
 *        description: Success
 *        schema:
 *          $ref: '#/definitions/User'
 *      404:
 *        description: Invalid Body or Params
 *
 */
interface QueryParams {
  email: string;
}

type ReturnedUser = Omit<IUser, 'password'>

type ReturnValue = GenericReturn<ReturnedUser> | GenericError

export const getUserParams: ValidationChain[] = [
  body('email').trim().exists({ checkFalsy: true, checkNull: true }),
];

async function getUser(req: Request<QueryParams>, res: Response<ReturnValue>) {
  // Omit password
  const user = await User.findOne({ email: req.body.email }).select('-password');

  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({
      code: StatusCodes.NOT_FOUND,
      message: ReasonPhrases.NOT_FOUND,
    });
  }

  return res.status(StatusCodes.OK).json({
    code: StatusCodes.OK,
    message: ReasonPhrases.OK,
    body: user,
  });
}

export default getUser;
