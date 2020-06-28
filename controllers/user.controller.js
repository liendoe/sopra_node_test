const UserService = require('../services/user.service');

const getById = async (req, res) => {
    try {
        const user = await UserService.get();
        return res.json(user);
    } catch (error) {
        return res.status(500).json({error: "Error getting root route"});
    }
}

module.exports.getById = getById;