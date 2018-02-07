var User = require('../models/user');
var request = require('request');
const rootURL = 'https://api.spotify.com/v1/';


function search(req, res) {
        res.render('users/search-results', { user: req.user });
    };


function create(req, res) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) return res.render('users/new');
        console.log(user);
        res.json(user);
    })
}

function newUser(req, res) {
    res.render('users/new', {user: new User()});
}

function show(req, res) {
    res.render('users/show', {user: new User});
}

module.exports = {
    search,
    show,
    new: newUser,
    create
}