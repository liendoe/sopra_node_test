const request = require('supertest');
const app = require('../app');

describe('Get Policies', () => {
   
  it(`should get the list of policies linked to a user name`, async done => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsIm5hbWUiOiJCcml0bmV5IiwiZW1haWwiOiJicml0bmV5YmxhbmtlbnNoaXBAcXVvdGV6YXJ0LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU5MzU0NTQwMn0.Ib9fIHaQ8v4m55E8YfEO2JODHKjWwfXUsSmrhf8hzg8';
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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsIm5hbWUiOiJCcml0bmV5IiwiZW1haWwiOiJicml0bmV5YmxhbmtlbnNoaXBAcXVvdGV6YXJ0LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU5MzU0NTQwMn0.Ib9fIHaQ8v4m55E8YfEO2JODHKjWwfXUsSmrhf8hzg8';
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

});