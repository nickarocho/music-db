var express = require('express');
var router = express.Router();
var apiCtrl = require('../controllers/api/credits');
var spotifyCtrl = require('../controllers/api/spotify');


router.get('/api/credits', apiCtrl.getCredits);
router.get('/api/instruments', apiCtrl.getInstruments);
router.post('/api/spotify', spotifyCtrl.getSpotify);
router.post('/api/credits', apiCtrl.createCredit);
router.delete('/api/credits/:id', apiCtrl.deleteCredit);

module.exports = router;
