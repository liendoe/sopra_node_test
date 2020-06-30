const UserService = require('../services/user.service');

describe('User Service', () => {
   
  it('should get all clients data from API', async done => {

    const [error, clients] = await UserService.getAll();

    expect(Array.isArray(clients)).toEqual(true);
    
    expect(clients[0]).toHaveProperty('id');

    done();
    
  });

  it('should find client by email and role', async done => {
    const email = 'britneyblankenship@quotezart.com';
    const role = 'admin';
    const [error, client] = await UserService.findByEmailAndRole( email, role);

    expect(typeof client).toEqual('object');
    
    expect(client).toHaveProperty('id');

    done();
    
  });

  it('should return not found error', async done => {
    const email = 'fake email';
    const role = 'not exists';
    const [error, client] = await UserService.findByEmailAndRole( email, role);

    expect(typeof error).toEqual('object');
    expect(error instanceof Error).toEqual(true);
    expect(error.message).toEqual('Not Found');

    done();
    
  });

});