import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import request from 'supertest';
import app from '~/index';
import { GenericReturn } from '~/types/Return';
import { UserModel } from '~/models/User';

describe('[POST] User - createUser', () => {
  beforeAll(() => {
    // Add connection to database here
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/v1/user/createUser')
      .send({
        username: 'test is cool',
        password: '123456',
      });

    const success: GenericReturn<UserModel> = {
      body: {
        id: 'testValue',
        username: 'test is cool',
        password: '123456',
      },
      code: StatusCodes.OK,
      message: ReasonPhrases.OK,
    };

    expect(res.status).toEqual(200);
    expect(res.body).toStrictEqual(success);
  });

  afterAll((done) => {
    // Close server
    app.close();
    done();
  });
});
