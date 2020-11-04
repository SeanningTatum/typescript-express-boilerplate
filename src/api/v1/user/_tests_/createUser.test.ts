import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import request from 'supertest';
import User from '~/models/User';
import server from '~/server';

describe('[POST] User - createUser', () => {
  it('should create a new user', async (done) => {
    try {
      const testUser = {
        email: 'test@gmail.com',
        password: '123456',
      };

      const res = await request(server(true))
        .post('/api/v1/user/createUser')
        .send(testUser);

      // Verify Codes
      expect(res.status).toEqual(StatusCodes.OK);
      expect(res.body.code).toEqual(StatusCodes.OK);
      expect(res.body.message).toEqual(ReasonPhrases.OK);
    } catch (e) {
      done(e);
    }
  });

  afterAll(async (done) => {
    await User.deleteMany({});
    done();
  });
});
