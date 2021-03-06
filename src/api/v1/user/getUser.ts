import { Request, Response } from 'express';
import { param, ValidationChain } from 'express-validator';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { UserModel } from '~/models/User';
import { GenericReturn } from '~/types/Return';

/**
 * @swagger
 *
 * /api/v1/user/getUser/{id}:
 *  get:
 *    tags: [User]
 *    description: Fetches user with matching id
 *    produces: application/json
 *    parameters:
 *      - name: id
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the user
 *    responses:
 *      200:
 *        description: Success
 *        schema:
 *          $ref: '#/definitions/User'
 *      400:
 *        description: Invalid Body or Params
 *
 */
interface QueryParams {
  id: string;
}

interface ReturnValue extends GenericReturn<UserModel> {}

export const getUserParams: ValidationChain[] = [
  param('id').trim().exists({ checkFalsy: true, checkNull: true }),
];

function getUser(req: Request<QueryParams>, res: Response<ReturnValue>) {
  return res.status(StatusCodes.OK).json({
    message: ReasonPhrases.OK,
    code: StatusCodes.OK,
    body: {
      id: req.params.id,
      username: 'TestUsername',
    },
  });
}

export default getUser;
