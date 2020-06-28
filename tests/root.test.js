const request = require('supertest');
const app = require('../app');

describe('Get Root', () => {
  it('should be 200 and return status, message, data', async done => {

    const res = await request(app).get('/v1');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status');
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('data');
    
    done();
    
  });
});