var express = require('express');
var router = express.Router();
var creditCtrl = require('../controllers/credits');

router.get('/', creditCtrl.index);
router.get('/:id/edit', creditCtrl.edit);
router.put('/:id', creditCtrl.updateCredit);

module.exports = router;
