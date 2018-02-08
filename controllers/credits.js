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


// function searchSpotify(req, res) {
//     spotifyApi.clientCredentialsGrant()
//     .then(function(data) {
//         spotifyApi.setAccessToken(data.body['access_token']);
//         var options = {
//             url: `${rootURL}search?q=${req.body.name}&type=artist`,
//             headers: {
//                 'Authorization': `Bearer ${data.body['access_token']}`
//             }
//         };
//         request(options, function (err, response, body) {
//             var artistData = JSON.parse(body);
//             res.render('users/search-results', { artistData, user: req.user });
//             console.log(artistData)
//         });

//     })
//     .catch(function(err) {
//     })
// }

module.exports = {
   index,
   create: createCredit,
   new: newCredit,
//    show,
//    searchSpotify
}