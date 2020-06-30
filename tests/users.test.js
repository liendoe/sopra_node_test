const request = require('supertest');
const app = require('../app');

describe('Get Users', () => {const AuthService = require('../services/auth.service');
  it('should get user data filtered by user id', async done => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsIm5hbWUiOiJCcml0bmV5IiwiZW1haWwiOiJicml0bmV5YmxhbmtlbnNoaXBAcXVvdGV6YXJ0LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU5MzU0NTQwMn0.Ib9fIHaQ8v4m55E8YfEO2JODHKjWwfXUsSmrhf8hzg8';
  
    const res = await request(app)
      .get('/v1/users/a0ece5db-cd14-4f21-812f-966633e7be86')
      .set({ 'x-api-token': token});

    expect(res.statusCode).toEqual(200);
    
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('email');
    expect(res.body).toHaveProperty('role');
    
    expect(res.body.id).toBe('a0ece5db-cd14-4f21-812f-966633e7be86');
    done();
    
  });

  it('should get user data filtered by user name', async done => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsIm5hbWUiOiJCcml0bmV5IiwiZW1haWwiOiJicml0bmV5YmxhbmtlbnNoaXBAcXVvdGV6YXJ0LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU5MzU0NTQwMn0.Ib9fIHaQ8v4m55E8YfEO2JODHKjWwfXUsSmrhf8hzg8';
  
    const res = await request(app)
      .get('/v1/users?name=Manning')
      .set({ 'x-api-token': token});

    expect(res.statusCode).toEqual(200);
    
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('email');
    expect(res.body).toHaveProperty('role');
    
    expect(res.body.name).toBe('Manning');
    done();
    
  });

  it('should get all users data', async done => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsIm5hbWUiOiJCcml0bmV5IiwiZW1haWwiOiJicml0bmV5YmxhbmtlbnNoaXBAcXVvdGV6YXJ0LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU5MzU0NTQwMn0.Ib9fIHaQ8v4m55E8YfEO2JODHKjWwfXUsSmrhf8hzg8';
  
    const res = await request(app)
      .get('/v1/users/')
      .set({ 'x-api-token': token});

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toEqual(true);
    done();
    
  });

  it('should throws unauthorizer error', async done => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsIm5hbWUiOiJCcml0bmV5IiwiZW1haWwiOiJicml0bmV5YmxhbmtlbnNoaXBAcXVvdGV6YXJ0LmNvbSIsInJvbGUiOiJVbmF1dGhvcml6ZWQiLCJpYXQiOjE1OTM1NDYxNjd9.Kpklo4pBUYQtj4feOO0TMwUGZ398abm5s_NpznTv2o0';
  
    const res = await request(app)
      .get('/v1/users/')
      .set({ 'x-api-token': token});

    expect(res.statusCode).toEqual(403);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Forbidden');
    done();
    
  });
});