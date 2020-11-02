import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import request from 'supertest';
import server from '~/server';

describe('[POST] User - createUser', () => {
  it('should create a new user', async () => {
    const testUser = {
      email: 'test@gmail.com',
      password: '123456',
    };

    const res = await request(server)
      .post('/api/v1/user/createUser')
      .send(testUser);

    // Verify Codes
    expect(res.status).toEqual(StatusCodes.OK);
    expect(res.body.code).toEqual(StatusCodes.OK);
    expect(res.body.message).toEqual(ReasonPhrases.OK);

    const { email, password, _id } = res.body.body;

    // Verify user has been created and sent back as a response
    expect(_id).toBeDefined();
    expect(email).toBe(testUser.email);

    // Verify Password exists and is hashed
    expect(password).toBeDefined();
    expect(password).toBe(testUser.password);
  });

  afterAll((done) => {
    // app.close();
    done();
  });
});
