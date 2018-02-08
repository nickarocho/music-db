var express = require('express');
var router = express.Router();
var  apiCtrl = require('../controllers/api/credits');

router.get('/api/credits', apiCtrl.getCredits);

module.exports = router;