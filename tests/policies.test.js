const request = require('supertest');
const app = require('../app');

describe('Get Policies', () => {
   
  it('should get the list of policies linked to a user name ', async done => {

    const res = await request(app).get('/v1/policies?name=Britney');

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



});