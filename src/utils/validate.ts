import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationError, ValidationChain } from 'express-validator';
import {
  ReasonPhrases,
  StatusCodes,
} from 'http-status-codes';

interface ReturnType {
    message: string;
    errors: ValidationError[]
}

const validate = (validations: ValidationChain[]) => async (
  req: Request<any>,
  res: Response<ReturnType>,
  next: NextFunction,
) => {
  await Promise.all(validations.map((validation) => validation.run(req)));

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return res
    .status(StatusCodes.BAD_REQUEST)
    .json({ message: ReasonPhrases.BAD_REQUEST, errors: errors.array() });
};

export default validate;
