import { Response, Request } from 'express';

import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { RequestBody, ReturnValue } from './createUser.params';

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
