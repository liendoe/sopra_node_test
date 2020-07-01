const AuthService = require('../services/auth.service');

module.exports.authorize = (req, res, next) => {
    const bearer = req.headers['authorization'];
    let token;

    if(bearer){
        const bearer_parts = bearer.split(' ');
        token = bearer_parts[1];
    }
    const [error, payload] = AuthService.verifyToken(token);
    if(error){
        return res.status(401).end();
    }
    
    req.user = payload;
       
    next();
}