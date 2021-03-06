
const get = async (req, res) => {
    try {
        return res.json(
            {
                status:"success", 
                message:"root route", 
                data:{
                    "version_number":"v1.0.0"
                }
            }
        );
    } catch (error) {
        return res.status(500).json({error: "Error getting root route"});
    }
}

module.exports.get = get;