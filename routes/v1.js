const express = require('express');
const router = express.Router();

const RootController = require('../controllers/root.controller');
const AuthController = require('../controllers/auth.controller');
const UserController = require('../controllers/user.controller');
const PoliciesController = require('../controllers/policies.controller');

const { authorize } = require('../middleware/authorize');
const { permit } = require('../middleware/permit');

router.get('/', RootController.get);
router.post('/authenticate', AuthController.authenticate);
router.get('/users', authorize, permit('admin','user'), UserController.getFiltered);
router.get('/users/:id', authorize, permit('admin','user'), UserController.getById);
router.get('/policies',  authorize, permit('admin'), PoliciesController.getFiltered);
router.get('/policies/:id/user', authorize, permit('admin'), PoliciesController.getUser);

module.exports = router;