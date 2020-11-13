import { Request, Response } from 'express';
import { param, ValidationChain } from 'express-validator';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
// import UserModel from '~/models/User';
import { GenericReturn } from '~/types/Return';

interface QueryParams {
  id: string;
}

interface ReturnValue extends GenericReturn<any> {}

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
