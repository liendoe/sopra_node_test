const jwt = require('jsonwebtoken');
const config = require('../config');

const jwtKey = config.jwt.key;
const jwtExpirySeconds = config.jwt.expiry_seconds;
 
module.exports.singToken = (user) => {
    const token = jwt.sign( user, jwtKey, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds
    });

    let maxAgeInMiliseconds = jwtExpirySeconds * 1000;
    
    return { token, maxAgeInMiliseconds };
}

module.exports.verifyToken = (token) => {
    try {
        return [undefined, jwt.verify(token, jwtKey)];
    } catch (error) {
        return [error, undefined];
    }
}
