const requestService = require('./request.service');

const CLIENTS_URL = 'http://www.mocky.io/v2/5808862710000087232b75ac';

const getAll = async () => {
    try {
        const body = await requestService.get(CLIENTS_URL);
        return [undefined, body.clients];
    } catch (error) {
        return [error, undefined];
    }
}
module.exports.getAll = getAll;

module.exports.getById = async (id) => {
    try {
        const [error, clients] = await getAll();
        found = clients.find(client => client.id === id);
        return [undefined, found];
    } catch (error) {
        return [error, undefined];
    }
}

module.exports.getByName = async(name) => {
    try {
        const [error, clients] = await getAll();
        found = clients.find(client => client.name === name);
        return [undefined, found];
    } catch (error) {
        return [error, undefined];
    }
}