var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');

/* GET users listing. */
router.post('/search', userCtrl.search);
router.get('/profile', userCtrl.new);
router.post('/', userCtrl.create);


module.exports = router;
