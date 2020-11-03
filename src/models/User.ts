import { MongoError } from 'mongodb';
import mongoose, { Schema, Document } from 'mongoose';
import { DuplicateError } from '~/types/Error';

export interface IUser extends Document {
  email: string;
  password: string
}

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Middleware
UserSchema.post('save', function (error: MongoError, _: any, next: Function) {
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new DuplicateError('User'));
  }

  next();
});

export default mongoose.model<IUser>('User', UserSchema);
