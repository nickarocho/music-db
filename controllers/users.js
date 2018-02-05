var user = require('../models/user');

function results(req, res) {
    // search action
}

function create(req, res) {
    var user = new user(req.body);
    user.save(function(err) {
        if (err) return res.render('users/new');
        console.log(user);
        res.redirect('/profile');
    })
}

function newUser(req, res) {
    res.render('users/new', {user: new user()});
}

module.exports = {
    results,
    new: newUser,
    create
}