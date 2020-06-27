const request = require('supertest');
const app = require('../app');

describe('Get Endpoints', () => {
  it('should return the root route', async done => {

    const res = await request(app).get('/v1');
    console.log('----------------');
    console.log(res);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status');
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('data');
    done();
    
  })
})