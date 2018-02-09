var express = require('express');
var router = express.Router();
var creditCtrl = require('../controllers/credits');
var isLoggedIn = require('../utils/loggedIn');

router.get('/', isLoggedIn, creditCtrl.index);
router.get('/:id/edit', creditCtrl.edit);
router.put('/:id', creditCtrl.updateCredit);


module.exports = router;