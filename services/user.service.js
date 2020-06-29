const got = require('got');
 
module.exports.getAll = async () => {
    try {
        const body = await got('http://www.mocky.io/v2/5808862710000087232b75ac').json();
        return [undefined, body.clients];
    } catch (error) {
        return [error, undefined];
    }
}

module.exports.getById = async (id) => {
    try {
        const body = await got('http://www.mocky.io/v2/5808862710000087232b75ac').json();
        found = body.clients.find(client => client.id === id);
        return [undefined, found];
    } catch (error) {
        return [error, undefined];
    }
}

module.exports.getByName = async(name) => {
    try {
        const body = await got('http://www.mocky.io/v2/5808862710000087232b75ac').json();
        found = body.clients.find(client => client.name === name);
        return [undefined, found];
    } catch (error) {
        return [error, undefined];
    }
}