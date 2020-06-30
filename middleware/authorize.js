const AuthService = require('../services/auth.service');

module.exports.authorize = (req, res, next) => {
    const token = req.headers['x-api-token'];

    const [error, payload] = AuthService.verifyToken(token);
    if(error){
        return res.status(401).end();
    }
    
    req.user = payload;
       
    next();
}