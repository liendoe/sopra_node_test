const UserService = require('./user.service');
const jwt = require('jsonwebtoken');

const jwtKey = "my_secret_key"
const jwtExpirySeconds = 300
 
module.exports.validate = async (email, role) => {
    try {
        const [error, user] = await UserService.findByEmailAndRole(email, role);
        let token;
        if(error){
            throw new Error('Invalid User');
        }
        
        token = jwt.sign({ user }, jwtKey, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        });
        
        return [undefined, token];
        
    } catch (error) {
        return [error, undefined];
    }
}
