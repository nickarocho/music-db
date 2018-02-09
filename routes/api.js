var express = require('express');
var router = express.Router();
var apiCtrl = require('../controllers/api/credits');
var spotifyCtrl = require('../controllers/api/spotify');
var isLoggedIn = require('../utils/loggedIn');

router.get('/api/credits', isLoggedIn, apiCtrl.getCredits);
router.post('/api/spotify', isLoggedIn, spotifyCtrl.getSpotify);
router.post('/api/credits', isLoggedIn, apiCtrl.createCredit);
router.delete('/api/credits/:id', isLoggedIn, apiCtrl.deleteCredit);

module.exports = router;
