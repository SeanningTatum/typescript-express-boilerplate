import { Request, Response } from 'express';
import { param, ValidationChain } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import { UserModel } from '~/models/User';

/**
 * @swagger
 *
 * /api/v1/user/getUser/{id}:
 *  get:
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

interface ReturnValue extends UserModel {}

export const getUserParams: ValidationChain[] = [
  param('id').trim().exists({ checkFalsy: true, checkNull: true }),
];

function getUser(req: Request<QueryParams>, res: Response<ReturnValue>) {
  return res.status(StatusCodes.OK).json({
    id: req.params.id,
    username: 'TestUsername',
  });
}

export default getUser;
