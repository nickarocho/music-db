var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');


/* GET users listing. */

router.get('/search', userCtrl.search);
router.get('/show', userCtrl.show);
router.get('/new', userCtrl.new);
router.post('/users', userCtrl.create);


module.exports = router;
