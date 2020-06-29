const got = require('got');

module.exports.getByClientId = async(clientId) => {
    try {
        const body = await got('http://www.mocky.io/v2/580891a4100000e8242b75c5').json();
        found = body.policies.filter(policy => policy.clientId === clientId);
        return [undefined, found];
    } catch (error) {
        return [error, undefined];
    }
}