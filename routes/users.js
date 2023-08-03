var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersControllers')

/* /users*/
router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get('/profile', usersController.profile);

module.exports = router;
