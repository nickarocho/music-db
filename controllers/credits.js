var Credit = require('../models/credit');

function index(req, res) {
    req.user.populate('credits', function (err) {
        res.render('credits/index', { user: req.user });
    });
}

function edit(req, res, next) {
    Credit.findById(req.params.id, function(err, credit) {
        if (err) return next(err);
        res.render('credits/edit', { credit });
    });
}

function updateCredit(req, res) {
    Credit.findByIdAndUpdate(req.params.id, req.body, function(err, credit) {
        req.user.save();
        res.redirect('/credits')
    });
}


module.exports = {
    index,
    edit,
    updateCredit
}