const request = require('supertest');
const app = require('../app');

describe('POST authenticate', () => {
   
  it(`should submit user email, role and return 200 and JWT`, async done => {
    const email = 'manningblankenship@quotezart.com';
    const role = 'admin';
    const res = await request(app)
        .post('/v1/authenticate')
        .set('Content-Type', 'application/json')
        .send({"email":email, "role":role})
        .expect(200)
        .expect('Content-Type','application/json; charset=utf-8');

    expect(typeof res.body).toBe('string');

    done();
    
  });

});