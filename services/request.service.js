const got = require('got');

module.exports.get = async (url) => {
    let body;
    try {
        body = await got(url).json();
    } catch(error) {
        throw error;
    }
    return body;
}