import { Response, Request } from 'express';
import { body } from 'express-validator';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { UserModel } from '~/models/User';
import { GenericReturn } from '~/types/Return';

/**
 * @swagger
 *
 * /api/v1/user/createUser:
 *  post:
 *    description: Creates a new user
 *    produces: application/json
 *    parameters:
 *      - name: user
 *        in: body
 *        schema:
 *          type: object
 *          required:
 *            - username
 *          properties:
 *            username:
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
    username: string;
}

interface ReturnValue extends GenericReturn<UserModel> {}

export const createUserParams = [
  body('username').exists({ checkNull: true, checkFalsy: true }),
];

function createUser(req: Request<{}, {}, RequestBody>, res: Response<ReturnValue>) {
  return res.status(StatusCodes.OK).json({
    code: StatusCodes.OK,
    message: ReasonPhrases.OK,
    body: {
      id: 'testId',
      username: req.body.username,
    },
  });
}

export default createUser;
