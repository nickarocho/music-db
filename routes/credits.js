var express = require('express');
var router = express.Router();
var creditCtrl = require('../controllers/credits');
var isLoggedIn = require('../utils/loggedIn');

router.get('/', isLoggedIn, creditCtrl.index);
router.get('/:id/edit', isLoggedIn, creditCtrl.edit);
router.put('/:id', isLoggedIn, creditCtrl.updateCredit);


module.exports = router;