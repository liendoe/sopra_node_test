const request = require('supertest');
const app = require('../app');

describe('Get Users', () => {
   
  it('should get user data filtered by user id', async done => {

    const res = await request(app).get('/v1/users/a0ece5db-cd14-4f21-812f-966633e7be86');

    expect(res.statusCode).toEqual(200);
    
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('email');
    expect(res.body).toHaveProperty('role');
    
    expect(res.body.id).toBe('a0ece5db-cd14-4f21-812f-966633e7be86');
    done();
    
  });

  it('should get user data filtered by user name', async done => {

    const res = await request(app).get('/v1/users?name=Manning');

    expect(res.statusCode).toEqual(200);
    
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('email');
    expect(res.body).toHaveProperty('role');
    
    expect(res.body.name).toBe('Manning');
    done();
    
  });

  it('should get all users data', async done => {

    const res = await request(app).get('/v1/users/');

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toEqual(true);
    done();
    
  });
});