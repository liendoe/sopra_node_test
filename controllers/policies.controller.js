const UserService = require('../services/user.service');
const PoliciesService = require('../services/policies.service');

module.exports.getFiltered = async (req, res) => {
    try {
        let user, policies, error;
        
        if (req.query.hasOwnProperty('name')) {
            [error, user] = await UserService.getByName(req.query.name);
            if(!user){
                    return res.status(404).json({error: "User '" + req.query.name + "' not found"});
                
            }
        } else {
            return res.status(400).json({error: "user name query params is required"});
        }

        [error, policies] = await PoliciesService.getByClientId(user.id);
        
        if(!policies){
            return res.status(404).json({message:'policies not found'});
        }

        return res.json(policies);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Error getting policies by filter"});
    }
};

module.exports.getUser = async(req, res) => {
    try {
        let user, policy, error;

        [error, policy] = await PoliciesService.getById(req.params.id);

        if(!policy){
            return res.status(404).json({message:'policy not found'});
        }

        [error, user] = await UserService.getById(policy.clientId);

        if(!user){
            return res.status(404).json({message:'user not found'});
        }

        return res.json(user);
    } catch (error) {
        return res.status(500).json({error: "Error getting policies"});
    }
}