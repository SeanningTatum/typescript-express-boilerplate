import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import request from 'supertest';
import app from '~/index';
import { IUser } from '~/models/User';

describe('[POST] User - createUser', () => {
  it('should create a new user', async () => {
    const testUser = {
      email: 'test@gmail.com',
      password: '123456',
    };

    const res = await request(app)
      .post('/api/v1/user/createUser')
      .send(testUser);

    // Verify Codes
    expect(res.status).toEqual(StatusCodes.OK);
    expect(res.body.code).toEqual(StatusCodes.OK);
    expect(res.body.message).toEqual(ReasonPhrases.OK);

    const { email, password } = res.body as IUser;

    // Verify user has been created and sent back as a response
    expect(email).toBe(testUser.email);

    // Verify Password exists and is hashed
    expect(password).toBeDefined();
    expect(password).not.toBe(testUser.password);
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
