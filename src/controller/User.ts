import UserModel, { UserType } from '~/models/User';
import { DuplicateError } from '~/types/Error';

class UserController {
  static async createUser(body: UserType) {
    // Find if email is already taken
    const existingUser = await UserModel.findOne({ email: body.email });

    if (existingUser) {
      throw new DuplicateError('User');
    }

    const userData = UserModel.sanitize(body);

    const newUser = await new UserModel(userData).save();

    return newUser.plain();
  }
}

export default UserController;
