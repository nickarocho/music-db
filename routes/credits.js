var express = require('express');
var router = express.Router();
var creditCtrl = require('../controllers/credits');


router.get('/', creditCtrl.index);
router.get('/new', creditCtrl.new);
router.post('/', creditCtrl.create);
// router.get('/:id/show', creditCtrl.show);
// router.get('/search', creditCtrl.searchSpotify)


module.exports = router;
