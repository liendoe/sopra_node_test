const express = require('express');
const router = express.Router();

const RootController = require('../controllers/root.controller');
const UserController 	= require('../controllers/user.controller');

router.get('/', RootController.get);
router.get('/users/:id', UserController.getById);

module.exports = router;