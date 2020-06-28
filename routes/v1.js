const express = require('express');
const router = express.Router();

const root = async (req, res) => {
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

router.get('/', root);

const getUserById = async (req, res) => {
    try {
        
        return res.json(
            {  
                "id":"a0ece5db-cd14-4f21-812f-966633e7be86",
                "name":"Britney",
                "email":"britneyblankenship@quotezart.com",
                "role":"admin"
            }
        );
    } catch (error) {
        return res.status(500).json({error: "Error getting root route"});
    }
}

router.get('/users/:id', getUserById);

module.exports = router;