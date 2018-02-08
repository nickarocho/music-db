var credit = require('../models/credit');
var request = require('request');
const rootURL = 'https://api.spotify.com/v1/';
const spotifyApi = require('./../config/token');

function index(req, res) {
//    req.user.populate('credits', function(err) {
// });
res.render('credits/index', {user: req.user});
}

function createCredit(req, res) {
    var credit = new Credit(req.body);
    credit.save(err => {
        res.redirect(`/credits/${credit.id}`); // credit._id?
    });   
}

function newCredit(req, res) {
    res.render('credits/new');
}

// function showCredit(req, res) {
//     res.render('credits/profile', {});
// }

module.exports = {
   index,
   create: createCredit,
   new: newCredit,
//    show,
}