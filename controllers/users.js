var user = require('../models/user');
// var request = require('request');
const rootURL = 'https://api.spotify.com/v1/';


function search(req, res) {
        res.render('users/search-results', { user: req.user });
    };
    // var options = {
    //     url: `${rootURL}search?q=${req.body.name}&type=artist`,
    //     headers: {
    //         'Authorization': `Bearer ${process.env.SPOTIFY_TOKEN}`
    //     }
    // };
    // request(options, function (err, response, body) {
    //     var artistData = JSON.parse(body);
    //     console.log(artistData);
        // res.render('users/search-results', {artistData});
    // });
// }

function create(req, res) {
    var user = new user(req.body);
    user.save(function(err) {
        if (err) return res.render('users/new');
        console.log(user);
        res.redirect('/users/new');
    })
}

function newUser(req, res) {
    res.render('users/new', {user: new user()});
}

function show(req, res) {
    res.render('users/show', {user});
}

module.exports = {
    search,
    show,
    new: newUser,
    create
}