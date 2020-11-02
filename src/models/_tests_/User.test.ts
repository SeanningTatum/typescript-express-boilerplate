/* eslint-disable no-underscore-dangle */

import connectToMongoDb from '~/config/mongo';

import User from '../User';

const testUserData = {
  email: 'test@test.com',
  password: '12345678',
};

describe('[User Model]', () => {
  beforeAll(async () => {
    await connectToMongoDb(true);
  });

  it('should create & save user successfully', async (done) => {
    const savedUser = await User.create(testUserData);

    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedUser._id).toBeDefined();
    expect(savedUser.email).toBe(testUserData.email);
    expect(savedUser.password).toBeDefined();

    //  TODO: Verify password got hashed
    expect(savedUser.password).toBe(testUserData.password);
    done();
  });

  afterAll(async (done) => {
    await User.deleteMany({});
    done();
  });
});
