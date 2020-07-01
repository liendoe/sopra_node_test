const requestService = require('./request.service');
const config = require('../config');

const POLICIES_URL = config.endpoints.policies;

module.exports.getByClientId = async (clientId) => {
    try {
        const body = await requestService.get(POLICIES_URL);
        const found = body.policies.filter(policy => policy.clientId === clientId);
        return [undefined, found];
    } catch (error) {
        return [error, undefined];
    }
}

module.exports.getById = async (id) => {
    try {
        const body = await requestService.get(POLICIES_URL);
        found = body.policies.find(policy => policy.id === id);
        return [undefined, found];
    } catch (error) {
        return [error, undefined];
    }
}