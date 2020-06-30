const AuthService = require('../services/auth.service');

module.exports.authenticate = async (req, res) => {
    try {
        const { email, role } = req.body;
        if (!email || !role ) {
            return res.status(401).end()
        }
        const [error, token] = await AuthService.validate(email, role);
        if (error){
            return res.status(401).end();
        }
        return res.json(token);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Error on Authenticate'});
    }
};