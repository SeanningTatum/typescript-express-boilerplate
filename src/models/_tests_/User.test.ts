/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
import User from '../User';

const testUserData = {
  email: 'test@test.com',
  password: '12345678',
};

describe('[User Model Test]', () => {
  beforeAll(async () => {
    await mongoose.connect(
      global.__MONGO_URI__,
      { useNewUrlParser: true, useCreateIndex: true }, (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      },
    );
  });

  it('should create & save user successfully', async () => {
    const validUser = new User(testUserData);
    const savedUser = await validUser.save();

    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedUser._id).toBeDefined();
    expect(savedUser.email).toBe(testUserData.email);
    expect(savedUser.password).toBeDefined();

    //  Verify password got hashed
    expect(savedUser.password).not.toBe(testUserData.password);
  });
});
