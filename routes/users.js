var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');


/* GET users listing. */

router.get('/search', userCtrl.search);
router.get('/users/:id/show', userCtrl.show); // /id/show
router.get('/users/new', userCtrl.new);
router.post('/users', userCtrl.create);


module.exports = router;
