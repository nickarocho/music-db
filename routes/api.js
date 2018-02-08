var express = require('express');
var router = express.Router();
var apiCtrl = require('../controllers/api/credits');
var spotifyCtrl = require('../controllers/api/spotify');

router.get('/api/credits', apiCtrl.getCredits);
router.post('/api/spotify', spotifyCtrl.getSpotify);
router.post('/api/credits', apiCtrl.createCredit);

module.exports = router;