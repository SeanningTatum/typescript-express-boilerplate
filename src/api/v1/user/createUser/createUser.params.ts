import { body } from 'express-validator';
import { UserModel } from '~/models/User';
import { GenericReturn } from '~/types/Return';

export interface RequestBody {
    username: string;
    password: string;
}

export type ReturnValue = GenericReturn<UserModel>

export const createUserParams = [
  body('username').exists({ checkNull: true, checkFalsy: true }),
  body('password').exists({ checkNull: true, checkFalsy: true }),
];
