var express = require('express');
const {index,admin} = require('../controllers/indexController');
var router = express.Router();

/* / */
router.get('/', index);
router.get('/admin', admin);

module.exports = router;
