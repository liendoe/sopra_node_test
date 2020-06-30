const AuthService = require('../services/auth.service');
const UserService = require('../services/user.service');

module.exports.authenticate = async (req, res) => {
    try {
        const { email, role } = req.body;
        if (!email || !role ) {
            return res.status(400).json({error: 'Email and Role are required'});
        }

        const [error, user] = await UserService.findByEmailAndRole(email, role);
        if(error){
            return res.status(401).end();
        }

        const {token, maxAgeInMiliseconds} = AuthService.singToken(user);

        res.cookie("token", token, { maxAge: maxAgeInMiliseconds });

        return res.json(token);
    } catch (error) {
        return res.status(500).json({error: 'Error on Authenticate'});
    }
};