const requestService = require('./request.service');
const config = require('../config');

const CLIENTS_URL = config.endpoints.clients;

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
        found = clients.find(client => client.name.toLowerCase() === name.toLowerCase());
        return [undefined, found];
    } catch (error) {
        return [error, undefined];
    }
}

module.exports.findByEmailAndRole = async(email, role) => {
    try {
        const [error, clients] = await getAll();
        const found = clients.find((client) => isValidEmailAndRole(email, role, client));
        
        if(!found){
            throw new Error('Not Found');
        }
        return [undefined, found];
    } catch (error) {
        return [error, undefined];
    }
}

function isValidEmailAndRole(email, role, client){
    return (client.email.toLowerCase() === email.toLowerCase() && client.role.toLowerCase() === role.toLowerCase());
}