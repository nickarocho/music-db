var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');


/* GET users listing. */

router.get('/search', userCtrl.search);
router.get('/users/new', userCtrl.new);


module.exports = router;
