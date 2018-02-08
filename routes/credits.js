var express = require('express');
var router = express.Router();
var creditCtrl = require('../controllers/credits');

router.get('/', creditCtrl.index);

module.exports = router;
