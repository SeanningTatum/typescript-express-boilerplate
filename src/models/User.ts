import gstore from '~/config/gstore';

export interface UserType {
  email: string;
  password: string;
}

// Pass it on Schema creation
const schema = new gstore.Schema<UserType>({
  email: { type: String, validate: 'isEmail', required: true },
  password: { type: String, excludeFromIndexes: true, required: true },
});

const User = gstore.model('User', schema);

export default User;
