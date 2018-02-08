var Credit = require('../models/credit');

function index(req, res) {
    req.user.populate('credits', function (err) {
        res.render('credits/index', { user: req.user });
    });
}

module.exports = {
    index
}