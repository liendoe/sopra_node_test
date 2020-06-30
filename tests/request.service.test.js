const requestService = require('../services/request.service');


describe('Request to GET a url', () => {
    it('should return the response body as json',async (done) => {

        const body = await requestService.get('http://www.mocky.io/v2/5808862710000087232b75ac');

        expect(typeof body).toBe('object');
        expect(body).toHaveProperty('clients');

        done();

    });
});