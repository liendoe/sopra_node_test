const AuthService = require('../services/auth.service');
const jwt = require('jsonwebtoken');

describe('Auth Service', () => {
   
  it(`should get a user and return a signed JWT and expitation age in miliseconds`, () => {

    const user = {
      id: "a0ece5db-cd14-4f21-812f-966633e7be86",
      name: "Britney",
      email: "britneyblankenship@quotezart.com",
      role: "admin"
    };

    const {token, maxAgeInMiliseconds} = AuthService.singToken(user);
    expect(typeof token).toEqual('string');
    expect(typeof maxAgeInMiliseconds).toEqual('number');
    expect(maxAgeInMiliseconds).toEqual(300*1000);
    
  });

  it(`should verify a JWT token and return user object`, () => {

    const user = {
      id: "a0ece5db-cd14-4f21-812f-966633e7be86",
      name: "Britney",
      email: "britneyblankenship@quotezart.com",
      role: "admin"
    };

    const { token, maxAgeInMiliseconds } = AuthService.singToken(user);

    const [error, payload] = AuthService.verifyToken(token);

    expect(typeof payload).toEqual('object');
    expect(payload).toHaveProperty('id');
    expect(payload).toHaveProperty('name');
    expect(payload).toHaveProperty('email');
    expect(payload).toHaveProperty('role');

    expect(payload.id).toEqual('a0ece5db-cd14-4f21-812f-966633e7be86');
    expect(payload.name).toEqual('Britney');
    expect(payload.email).toEqual('britneyblankenship@quotezart.com');
    expect(payload.role).toEqual('admin');
    
  });

});