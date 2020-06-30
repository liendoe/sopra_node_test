const AuthService = require('../services/auth.service');

describe('Auth Service', () => {
   
  it(`should validate user email, password and return JWT`, async done => {

    const email = 'britneyblankenship@quotezart.com';
    const role = 'admin';

    const [error, token] = await AuthService.validate(email, role);
    expect(error).toEqual(undefined);
    expect(typeof token).toEqual('string');
    
    done();
    
  });

  it(`should validate user email, password and return Error`, async done => {

    const email = 'invalid@email.com';
    const role = 'invalid role';

    const [error, token] = await AuthService.validate(email, role);

    expect(typeof error).toEqual('object');
    expect( token).toEqual(undefined);
    expect(error instanceof Error).toEqual(true);
    expect(error.message).toEqual('Invalid User');
    
    done();
    
  });

});