var express = require('express');
var router = express.Router();
var creditCtrl = require('../controllers/credits');



router.post('/', creditCtrl.new);



module.exports = router;
