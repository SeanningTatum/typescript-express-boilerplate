import request from 'supertest';
import app from '~/index';

describe('[POST] User - createUser', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/v1/user/createUser')
      .send({
        userId: 1,
        title: 'test is cool',
      });
    expect(res.status).toEqual(200);
    // expect(res.body).toHaveProperty('post');
  });
});
