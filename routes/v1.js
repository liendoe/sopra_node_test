const express = require('express');
const router = express.Router();

const RootController = require('../controllers/root.controller');
const UserController = require('../controllers/user.controller');
const PoliciesController = require('../controllers/policies.controller');

router.get('/', RootController.get);
router.get('/users', UserController.getFiltered);
router.get('/users/:id', UserController.getById);
router.get('/policies', PoliciesController.getFiltered);
router.get('/policies/:id/user', PoliciesController.getUser);

module.exports = router;