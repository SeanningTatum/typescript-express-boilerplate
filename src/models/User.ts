import mongoose, { Schema, Document } from 'mongoose';

/**
 * @swagger
 *
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - email
 *       - password
 *     properties:
 *       id:
 *         type: string
 *         format: id
 *       email:
 *         type: string
 *         format: email
 *       password:
 *         type: string
 *         format: password
 */

export interface IUser extends Document {
    email: string;
    password: string;
}

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model<IUser>('User', UserSchema);
