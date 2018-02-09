var User = require('../models/user');
var request = require('request');
const rootURL = 'https://api.spotify.com/v1/';


function search(req, res) {
    res.render('users/search-results', { user: req.user });
};

function newUser(req, res) {
    console.log(req.user)
    res.render('users/new', {user: req.user });
}

function show(req, res) {
    res.render('users/show', {user: new User});
}

module.exports = {
    search,
    new: newUser
}