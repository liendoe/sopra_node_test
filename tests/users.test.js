const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app');
const config = require('../config');

describe('Get Users', () => {const AuthService = require('../services/auth.service');
  it('should get user data filtered by user id', async done => {
    let admin = {
      id:"a0ece5db-cd14-4f21-812f-966633e7be86",
      name:"Britney",
      email:"britneyblankenship@quotezart.com",
      role:"admin"
    };
    const token = generateToken(admin);

    const res = await request(app)
      .get('/v1/users/a0ece5db-cd14-4f21-812f-966633e7be86')
      .set({ 'Authorization': 'Bearer ' + token});

    expect(res.statusCode).toEqual(200);
    
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('email');
    expect(res.body).toHaveProperty('role');
    
    expect(res.body.id).toBe('a0ece5db-cd14-4f21-812f-966633e7be86');
    done();
    
  });

  it('should get user data filtered by user name', async done => {
    let admin = {
      id:"a0ece5db-cd14-4f21-812f-966633e7be86",
      name:"Britney",
      email:"britneyblankenship@quotezart.com",
      role:"admin"
    };
    const token = generateToken(admin);

    const res = await request(app)
      .get('/v1/users?name=Manning')
      .set({ 'Authorization': 'Bearer ' + token});

    expect(res.statusCode).toEqual(200);
    
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('email');
    expect(res.body).toHaveProperty('role');
    
    expect(res.body.name).toBe('Manning');
    done();
    
  });

  it('should get all users data', async done => {
    let admin = {
      id:"a0ece5db-cd14-4f21-812f-966633e7be86",
      name:"Britney",
      email:"britneyblankenship@quotezart.com",
      role:"admin"
    };
    const token = generateToken(admin);

    const res = await request(app)
      .get('/v1/users/')
      .set({ 'Authorization': 'Bearer ' + token});

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toEqual(true);
    done();
    
  });

  it('should throws unauthorizer 403 error', async done => {
    let unauthorized = {
      id:"44e44268-dce8-4902-b662-1b34d2c10b8e",
      name:"Merrill",
      email:"merrillblankenship@quotezart.com",
      role:"Unauthorized"
    };
    const token = generateToken(unauthorized);

    const res = await request(app)
      .get('/v1/users/')
      .set({ 'Authorization': 'Bearer ' + token});

    expect(res.statusCode).toEqual(403);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Forbidden');
    done();
    
  });
});

function generateToken(user){
  const secret = config.jwt.key;
  const token = jwt.sign( user, secret, {
      algorithm: "HS256"
  });
  return token;
}