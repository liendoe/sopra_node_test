const UserService = require('../services/user.service');
const PoliciesService = require('../services/policies.service');

module.exports.getFiltered = async (req, res) => {
    try {
        let user, policies, error;
        
        if (req.query.hasOwnProperty('name')) {
            [error, user] = await UserService.getByName(req.query.name);
        } else {
            return res.status(400).json({error: "user name is required"});
        }

        [error, policies] = await PoliciesService.getByClientId(user.id);
        
        if (error){
            return res.status(500).json({error: "Error getting policies"});
        }

        return res.json(policies);
    } catch (error) {
        return res.status(500).json({error: "Error getting policies"});
    }
};