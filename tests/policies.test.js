const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app');

describe('Get Policies', () => {
   
  it(`should get the list of policies linked to a user name`, async done => {
    let admin = {
      id:"a0ece5db-cd14-4f21-812f-966633e7be86",
      name:"Britney",
      email:"britneyblankenship@quotezart.com",
      role:"admin"
    };
    const token = generateToken(admin);

    const res = await request(app)
      .get('/v1/policies?name=Britney')
      .set({ 'x-api-token': token});

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toEqual(true);
    expect(res.body[0]).toHaveProperty('id');
    expect(res.body[0]).toHaveProperty('amountInsured');
    expect(res.body[0]).toHaveProperty('email');
    expect(res.body[0]).toHaveProperty('inceptionDate');
    expect(res.body[0]).toHaveProperty('installmentPayment');
    expect(res.body[0]).toHaveProperty('clientId');
    
    done();
    
  });

  it('should get the user linked to a policy number ', async done => {
    let admin = {
      id:"a0ece5db-cd14-4f21-812f-966633e7be86",
      name:"Britney",
      email:"britneyblankenship@quotezart.com",
      role:"admin"
    };
    const token = generateToken(admin);
    const res = await request(app)
      .get('/v1/policies/7b624ed3-00d5-4c1b-9ab8-c265067ef58b/user')
      .set({ 'x-api-token': token});

    expect(res.statusCode).toEqual(200);
    
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('email');
    expect(res.body).toHaveProperty('role');

    done();
    
  });

  it('should throws unauthorizer 403 error ', async done => {
    let user = {
      "id":"a3b8d425-2b60-4ad7-becc-bedf2ef860bd",
      "name":"Barnett",
      "email":"barnettblankenship@quotezart.com",
      "role":"user"
    };
    const token = generateToken(user);
    const res = await request(app)
      .get('/v1/policies/7b624ed3-00d5-4c1b-9ab8-c265067ef58b/user')
      .set({ 'x-api-token': token});

    expect(res.statusCode).toEqual(403);
    
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Forbidden');

    done();
    
  });

});

function generateToken(user){
  const secret = 'my_secret_key';
  const token = jwt.sign( user, secret, {
      algorithm: "HS256"
  });
  return token;
}