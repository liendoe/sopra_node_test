const request = require('supertest');
const app = require('../app');

describe('Get Users', () => {
   
  it('should Get user data filtered by user id', async done => {

    const res = await request(app).get('/v1/users/a0ece5db-cd14-4f21-812f-966633e7be86');

    expect(res.statusCode).toEqual(200);
    
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('email');
    expect(res.body).toHaveProperty('role');
    
    expect(res.body.id).toBe('a0ece5db-cd14-4f21-812f-966633e7be86');
    done();
    
  });
});