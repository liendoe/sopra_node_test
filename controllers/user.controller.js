const UserService = require('../services/user.service');

module.exports.getById = async (req, res) => {
    try {
        const [error, user] = await UserService.getById(req.params.id);
        if (error){
            throw new Error();
        }
        return res.json(user);
    } catch (error) {
        return res.status(500).json({error: "Error getting user by id"});
    }
};

module.exports.getFiltered = async (req, res) => {
    try {
        let user, error;
        if (req.query.hasOwnProperty('id')) {
            [error, user] = await UserService.getById(req.query.id);
        } else if(req.query.hasOwnProperty('name')) {
            [error, user] = await UserService.getByName(req.query.name);
        } else {
            [error, user] = await UserService.getAll();
        }
        if (error){
            return res.status(500).json({error: "Error getting user by filter"});
        }
        return res.json(user);
    } catch (error) {
        return res.status(500).json({error: "Error getting user by filter"});
    }
};