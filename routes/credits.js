var express = require('express');
var router = express.Router();
var creditCtrl = require('../controllers/credits');



router.get('/profile', creditCtrl.new);
router.post('/', creditCtrl.new);
router.get('/profile', creditCtrl.show);



module.exports = router;
